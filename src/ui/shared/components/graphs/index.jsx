import React, {Component, PropTypes} from 'react'
import _ from 'lodash'
import { PieChart, BarChart, LineChart, Brush, ScatterPlot, AreaChart } from 'react-d3-components/src'
import { Paper, Utils, Slider } from 'material-ui'
import { contextTypes } from '../../decorators'

@contextTypes({ muiTheme: PropTypes.object })
export class BarGraph extends Component {
  constructor(props) {
    super(props);
  }

  getData() {
    return [
      {
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
      },
      {
      label: 'somethingB',
      values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
      },
      {
      label: 'somethingC',
      values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
      }
    ];
  }

  style() {
    return {
      tooltip: {
        backgroundColor: this.context.muiTheme.component.paper.backgroundColor,
        color: this.context.muiTheme.palette.textColor,
        padding: '10px 20px',
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
      }
    }
  }

  getTooltip(x, y0, y) {
    return (<div style={_.assign(this.style().tooltip, this.props.style)}>{'x: '+x+', y0: '+y0+', y: '+y}</div>)
  }

  render() {
    return (
      <div>
        <style>{`
          svg .tick text {
            fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.canvasColor, .8)};
            fontFamily: 'Roboto, sans-serif',
          }
        `}</style>
        <BarChart
          data={this.getData()}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}
          tooltipHtml={(x, y0, y) => this.getTooltip(x,y0,y)}
          onClick={(e, data) => console.log(e,data)} />
      </div>
    )
  }
}

@contextTypes({ muiTheme: PropTypes.object })
export class PieGraph extends Component {
  constructor(props) {
    super(props);
  }

  onMouseEnter(e, d){
    console.log('mouse enter', e, d );
  }

  getData() {
    return {
  		label: 'somethingA',
  		values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    };
  }

  getSort() {
    return null;
  }

  style() {
    return {
      tooltip: {
        backgroundColor: this.context.muiTheme.component.paper.backgroundColor,
        color: this.context.muiTheme.palette.textColor,
        padding: '10px 20px',
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
      }
    }
  }

  getTooltip(x, y) {
    return (<div style={_.assign(this.style().tooltip, this.props.style)}>{'x: '+x+', y: '+y}</div>)
  }

  render() {
    return (
      <div>
        <style>{`
          svg .arc text {
            fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .8)};
            fontFamily: 'Roboto, sans-serif',
          }
          svg .arc polyline {
            stroke: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .8)};
          }
        `}</style>
        <PieChart
      				data={this.getData()}
      				width={600}
      				height={400}
      				margin={{top: 10, bottom: 10, left: 100, right: 100}}
      				sort={this.getSort()}
              tooltipHtml={(x, y) => this.getTooltip(x,y)}
              onClick={(e, data) => console.log(e,data)} />
      </div>
    )
  }

}


// Note Finish
@contextTypes({ muiTheme: PropTypes.object })
export class LineGraphWithBrush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {label: '', values: [
                {x: new Date(2015, 2, 5), y: 1},
                {x: new Date(2015, 2, 6), y: 2},
                {x: new Date(2015, 2, 7), y: 0},
                {x: new Date(2015, 2, 8), y: 3},
                {x: new Date(2015, 2, 9), y: 2},
                {x: new Date(2015, 2, 10), y: 3},
                {x: new Date(2015, 2, 11), y: 4},
                {x: new Date(2015, 2, 12), y: 4},
                {x: new Date(2015, 2, 13), y: 1},
                {x: new Date(2015, 2, 14), y: 5},
                {x: new Date(2015, 2, 15), y: 0},
                {x: new Date(2015, 2, 16), y: 1},
                {x: new Date(2015, 2, 16), y: 1},
                {x: new Date(2015, 2, 18), y: 4},
                {x: new Date(2015, 2, 19), y: 4},
                {x: new Date(2015, 2, 20), y: 5},
                {x: new Date(2015, 2, 21), y: 5},
                {x: new Date(2015, 2, 22), y: 5},
                {x: new Date(2015, 2, 23), y: 1},
                {x: new Date(2015, 2, 24), y: 0},
                {x: new Date(2015, 2, 25), y: 1},
                {x: new Date(2015, 2, 26), y: 1}
            ]},
      xScale: d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 400 - 70]),
      xScaleBrush: d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 400 - 70])
    }
  }

  getData(data) {
    return _.map(data, (row, idx) => {
      let formattedData = {}
      formattedData.x = new Date(row[0]);
      formattedData.y = row[1];
      return formattedData;
    });
  }

  style() {
    return {
      tooltip: {
        backgroundColor: this.context.muiTheme.component.paper.backgroundColor,
        color: this.context.muiTheme.palette.textColor,
        padding: '10px 20px',
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
      }
    }
  }

  getTooltip(coords) {
    return (<div style={_.assign(this.style().tooltip, this.props.style)}>{'x: '+coords.x+', y: '+coords.y}</div>)
  }

  render() {
    return (
      <div>
        <style>{`
            .brush .extent {
              stroke: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.primary1Color, 1)};
              fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.primary1Color, 1)};
              shape-rendering: crispEdges;
              height:6px;
            }

            .brush .background {
              fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .25)};
              height: 2px;
              y: 2;
            }

            svg .tick text {
              fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .8)};
              fontFamily: 'Roboto, sans-serif',
            }
        }`}</style>
        <LineChart
           data={this.state.data}
           width={400}
           height={400}
           margin={{top: 10, bottom: 50, left: 50, right: 20}}
           tooltipHtml={(x,coords) => this.getTooltip(coords)}
           xScale={this.state.xScale}
           xAxis={{tickValues: this.state.xScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%d")}}
           onClick={(e, data) => console.log(e,data)}
        />
        <div className="brush" style={{float: 'none'}}>
          <Brush
             width={400}
             height={50}
             margin={{top: 0, bottom: 30, left: 50, right: 20}}
             xScale={this.state.xScaleBrush}
             extent={[new Date(2015, 2, 10), new Date(2015, 2, 12)]}
             onChange={e => this._onChange(e)}
             xAxis={{tickValues: this.state.xScaleBrush.ticks(d3.time.day, 2), tickFormat: d3.time.format("%d")}}
          />
        </div>
      </div>
    );
  }

  _onChange(extent) {
      this.setState({xScale: d3.time.scale().domain([extent[0], extent[1]]).range([0, 400 - 70])});
  }
}

@contextTypes({ muiTheme: PropTypes.object })
export class LineGraph extends Component {
  constructor(props) {
    super(props);
  }

  style() {
    return {
      tooltip: {
        backgroundColor: this.context.muiTheme.component.paper.backgroundColor,
        color: this.context.muiTheme.palette.textColor,
        padding: '10px 20px',
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
      }
    }
  }

  getTooltip(coords) {
    return (<div style={_.assign(this.style().tooltip, this.props.style)}>{'x: '+coords.x+', y: '+coords.y}</div>)
  }

  render() {
    console.log(this.props.domain);
    return (
      <div>
        <style>{`
            svg .tick text {
              fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .8)};
              fontFamily: 'Roboto, sans-serif',
            }
        }`}</style>

        <LineChart
           data={this.props.data}
           width={400}
           height={400}
           margin={{top: 10, bottom: 50, left: 50, right: 20}}
           tooltipHtml={(x,coords) => this.getTooltip(coords)}
           onClick={(e, data) => console.log(e,data)}
        />
      </div>
    );
  }
}

@contextTypes({ muiTheme: PropTypes.object })
export class ScatterPlotGraph extends Component {
  constructor(props) {
    super(props);
  }

  style() {
    return {
      tooltip: {
        backgroundColor: this.context.muiTheme.component.paper.backgroundColor,
        color: this.context.muiTheme.palette.textColor,
        padding: '10px 20px',
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
      }
    }
  }

  getData() {
    return [
      {
      label: 'somethingA',
      values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
      },
      {
      label: 'somethingB',
      values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
      }
    ];
  }

  getTooltip(x, y) {
    return (<div style={_.assign(this.style().tooltip, this.props.style)}>{'x: '+x+', y: '+y}</div>)
  }

  render() {
    return (
      <div>
        <style>{`
            svg .tick text {
              fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .8)};
              fontFamily: 'Roboto, sans-serif',
            }
        }`}</style>
        <ScatterPlot
           data={this.getData()}
           width={400}
           height={400}
           margin={{top: 10, bottom: 50, left: 50, right: 20}}
           tooltipHtml={(x,y) => this.getTooltip(x,y)}
           onClick={(e, data) => console.log(e,data)}
        />
      </div>
    );
  }
}

@contextTypes({ muiTheme: PropTypes.object })
class AreaGraph extends Component {
  constructor(props) {
    super(props);
  }

  style() {
    return {
      tooltip: {
        backgroundColor: this.context.muiTheme.component.paper.backgroundColor,
        color: this.context.muiTheme.palette.textColor,
        padding: '10px 20px',
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
      }
    }
  }

  getData() {
    return [
      {
      label: 'somethingA',
      values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
      },
      {
      label: 'somethingB',
      values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
      }
    ];
  }

  getTooltip(y, ySum) {
    return (<div style={_.assign(this.style().tooltip, this.props.style)}>{'y: '+y+', ySum: '+ySum}</div>)
  }

  render() {
    return (
      <div>
        <style>{`
            svg .tick text {
              fill: ${Utils.ColorManipulator.fade(this.context.muiTheme.palette.textColor, .8)};
              fontFamily: 'Roboto, sans-serif',
            }
        }`}</style>
        <AreaChart
           data={this.getData()}
           width={400}
           height={400}
           margin={{top: 10, bottom: 50, left: 50, right: 20}}
           tooltipHtml={(y,ySum) => this.getTooltip(y,ySum)}
           onClick={(e,data) => console.log(e,data)}
        />
      </div>
    );
  }
}

export { AreaGraph };
