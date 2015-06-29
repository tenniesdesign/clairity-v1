import React from 'react'
import Settings from '../../shared/components/settings'
import Layout from '../../shared/components/layout'
import Details from '../../shared/components/details'
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

let data = [];

let Installation = React.createClass ({

  propTypes: {
    style: React.PropTypes.object,
    data: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      data: data
    };
  },

  style() {
    let style = {};

    if(this.props.style) {
      Object.keys(this.props.style).forEach(function(key, i){
        console.log(key);
        style[key] = this.props.style[key];
      }, this);
    }

    return style;
  },

  render() {
    return (
      <div style={this.props.style}>
        <Paper zDepth={1} rounded={true}>
          <Layout widths={{lg:[12],md:[12],sm:[12],xs:[12]}} pPadding={'0 20px 20px 20px'}>
            <div>
              <Details title={'Installation'}
                data = {[
                  { label: '', value: <Layout widths={{lg: [12,12,12], md: [12,12,12], sm: [12,12,12], xs: [12,12,12]}}><Checkbox label={'Circuit Installed and Tested'} defaultSwitched={true} switched /><Checkbox label={'Ethernet Errors Checked'} /><Checkbox label={'Circuit Accepted'} /><Checkbox label={'Voice Installed and Tested'} /><Checkbox label={'Voice Services Accepted'} /></Layout>, detailType: 'muiTextField' },
                  { label: 'RSS', name: '60.0 dBm', value: <TextField multiLine={true} />, detailType: 'muiTextField' },
                  { label: 'Notes', name: 'hardware_notes', value: <TextField multiLine={true} />, detailType: 'muiTextField' },
                  { label: '', value:<RaisedButton onClick={() => this.refs.pop.submit()} primary label="Update" />, detailType: 'muiButton' }
                ]}
              />
            </div>
          </Layout>
        </Paper>
      </div>
    );
  }
});

export default Installation;
