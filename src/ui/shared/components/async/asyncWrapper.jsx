import React, { Component, addons } from 'react/addons'
import { instance } from '../../../../core/bridge'
import _ from 'lodash'

import { v4 } from 'uuid'

const { CSSTransitionGroup } = addons;

function withoutFns(obj) {
  return _.omit(obj, _.functions(obj));
}

export default function asyncWrapper() {

  const args = Array.from(arguments);

  if (args.length === 1) {
    return Component => asyncWrapper(Component, ...args);
  }

  const Component = args[0];
  const options = args[1];

  const merge = (s, p) => (s[p[0]] = p[1]) && s;

  const actions = _.chain(options)
                   .pairs()  // convert to arrays to maintain key names
                   .filter(([, v]) => v.type === 'action')  // filter by action
                   .map(([k, v]) => [k, a => instance.dispatch(v(a, k))])  // convert function to promise
                   .reduce(merge, {})  // create action dictionary
                   .value();

  const queries = _.chain(options)
                   .pairs()
                   .filter(p => p[1].type === 'query')
                   .value();

  class AsyncWrapper extends React.Component {

    constructor(props) {
      super(props);
      this.name = v4().substring(0, 3);
      this.tokens = {};
      this.tables = {};

      this.state = { ready: queries.length === 0 };
      this.update = this.update.bind(this);
      this.requestState(props);
      instance.on(['update'], this.update);
    }

    update(ev) {
      console.log(this.name, 'async wrapper', 'update event called');
      let force = ev.forceUpdate && this.tables[ev.message.payload.table];
      if (this.tokens[ev.cause.token] || force) {
        console.log(this.name, 'async', 'cause matched')
        this.requestState(this.props);
      } else {
        console.log(this.name, 'async', 'cause ignored')
      }
    }

    componentWillUnmount() {
      instance.off(['update'], this.update);
    }

    componentWillReceiveProps(props) {
      console.log(this.name, 'async', 'componentWillReceiveProps', props, this.props)
      if (!_.eq(withoutFns(props), withoutFns(this.props))) {
        console.log(this.name, 'async', 'componentWillReceiveProps', 'props changed');
        this.setState({ready: false});
        this.requestState(props);
      };
    }

    shouldComponentUpdate(props, state) {
      if (this.state.ready != state.ready) {
        return true;
      }
      if (!_.eq(withoutFns(props), withoutFns(this.props))) {
        return true;
      }
      return false;
    }

    requestState(props) {
      console.log(this.name, 'async', 'requestState', props);
      if (queries.length === 0) {
        return;
      }
      let promises = [];
      this.reqs = queries.map(q => {  // q - [propName, queryInfo]
        let { type, name } = q[1];
        let token = v4();
        let params = q[1].getParams(props, q[0]);
        if (params.table) {
          this.tables[params.table] = params.table;
        }
        let promise = instance.dispatch({ type, name, params, token, _owner: this.name });
        promises.push(promise);
        promise.then(this.queryFinished(q[0], token));
        return [q[0], promise];
      }).reduce(merge, {});
      Promise.all(promises).then(() => this.setState({ ready: true }));
    }

    queryFinished(name, token) {
      this.tokens[token] = token;
      return query => {
        console.log(this.name, 'async', 'query finished', query)
        this.reqs[name] = query;
      }
    }

    getInnerProps() {
      return {
        ...this.props,
        actions,
        ...this.reqs
      }
    }

    render() {
      console.log(this.name, 'async', 'rendering', this.getInnerProps(), this.state);
      let innerComponent = this.state.ready || queries.length === 0 ?
          <Component key="inner" ref="inner" {...this.getInnerProps()} />
        :
          <div key="null" />;
      return (
        <CSSTransitionGroup transitionName="fade">
          {innerComponent}
        </CSSTransitionGroup>
      );
    }

  }

  return AsyncWrapper;
}
