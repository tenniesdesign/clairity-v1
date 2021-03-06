
import React, {PropTypes} from 'react'
import Store from '../../core/store'
import Layout from '../shared/components/layout'
import Footer from '../shared/components/footer'
import Header from '../shared/components/header'
import TopNav from '../shared/components/topnav'
import LeftNav from '../shared/components/leftnav'
import Content from '../shared/components/content'
import Table from '../shared/components/table'

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
import { State } from 'react-router'


let WorkOrders = React.createClass({
  mixins: [State],

  getOrderId() {
    return Number(this.getParams().id || 1538);
  },

  render() {
    return (
            <div>
              <div className="section-header">
                <Header><h1>Work Order: View/Upload Files</h1></Header>
              </div>
            </div>
    )
  }
});

export default WorkOrders;
