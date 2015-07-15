import React, {PropTypes} from 'react'
import Header from '../shared/components/header'
import Store from '../shared/store'
import Layout from '../shared/components/layout'
import Footer from '../shared/components/footer'
import TopNav from '../shared/components/topnav'
import LeftNav from '../shared/components/leftnav'
import Content from '../shared/components/content'
import Table from '../shared/components/table'

import {
  networkModelRenderer,
  queryRenderer,
  modelQuery
} from '../shared/components/networkRenderer'

import {
  RadioButtonGroup,
  RadioButton,
  Checkbox,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  IconButton,
  Toggle,
  Slider,
  DropDownMenu,
  DatePicker,
  TextField,
  Paper
} from 'material-ui'

import controllable from 'react-controllables'
import {State} from 'react-router'

import AccountDetails from './parts/details'

let accountView = React.createClass({
  render() {
    let account = this.props.account.toJS();
    return (
      <Layout widths={{}} cPadding={'20px 20px 0 0'}>
        <Header><h1>Account - {account.name}</h1></Header>
        <Layout widths={{}} cPadding={'20px 20px 0 0'}>
          <AccountDetails agent={null} account={this.props.account} />
        </Layout>
      </Layout>
    )
  }
});

let Account = networkModelRenderer(accountView, 'account');

let AccountPage = React.createClass({
  mixins: [State],
  render() {
    return <Account id={+this.getParams().accountId} />;
  }
});

export default AccountPage;
