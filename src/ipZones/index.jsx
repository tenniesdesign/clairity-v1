
import React, {PropTypes} from 'react'
import Layout from  '../shared/components/layout'
import Details from  '../shared/components/details'
import DropDown from '../shared/components/dropDown'
import Table from  '../shared/components/table'

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
import {List} from 'immutable'

import {Navigation} from 'react-router'

let IpZones = React.createClass({
  mixins: [Navigation],

  getZones() {
    return [
      { zoneId: 1, name: 'zone asdf', blocks: <DropDown  menuItems={ new List([
        { label: '66.187.176.0 - 66.187.176.127', value: 1 },
        { label: '216.59.211.0 - 216.59.211.25', value: 1 }]) } /> }
      ]
  },

  getZoneTable(getZones) {
    let zones = getZones;
    return {
      colNames: [
        { label: 'Edit', name: 'edit', cellType: 'string'},
        { label: 'Name', name: 'name', cellType: 'string'},
        { label: 'blocks', name: 'blocks', cellType: 'muiDropDown' } ],
      data: zones.map(s => {
        s.edit = <div style={{textAlign: 'center'}}><RaisedButton label={'EDIT'} linkButton={true} href={`/#/ip-zone/${s.zoneId}/edit`} /></div>;
        return s;
      }),
      colWidths: [2,6,6],
      maxWidth: 14,
      widthAdj: -30
    };
  },

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  render() {

    let action = "controller.cfm?event=manageIpZones";

    return (
      <Layout widths={{}} cPadding={'20px 20px 0 0'}>
        <Details
          title={'IP Zones'}
          layout={ {lg: ['auto', '320px']}}
          rowStyle={{ float: 'left' }}
          cStyles={{ lg: [{textAlign: 'left'}] }}
          data={[
              { label: 'Keyword', name: 'keyword', value: <TextField />, detailType: 'muiTextField'},
              { label: '', value: <div><RaisedButton primary label="Search" style={{ marginRight: '20px', position: 'relative', top: '-12px'}}/><RaisedButton style={{  }} linkButton={true} href={`/#/ip-zone/create`} label="Add New Zone" /></div>, detaildetailType: 'muiButton'}
          ]}
        />
        <Table {...this.getZoneTable(this.getZones())} />
    </Layout>
    );
  }
});

export default IpZones;
