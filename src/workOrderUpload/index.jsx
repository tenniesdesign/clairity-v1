
import React, {PropTypes} from 'react'
import Store from '../shared/store'
import Layout from '../shared/components/layout'
import Footer from '../shared/components/footer'
import TopNav from '../shared/components/topnav'
import LeftNav from '../shared/components/leftnav'
import Content from '../shared/components/content'
import Table from '../shared/components/table'

import ContactLogs from './components/contactLogs'
import WorkOrderDetails from './components/workOrderDetails'
import LocationInfo from './components/locationInfo'
import Engineering from './components/engineering'
import EngineeringHardware from './components/engineeringHardware'
import EngineeringNetworking from './components/engineeringNetworking'
import Installation from './components/installation'
import Messaging from './components/messaging'
import Pop from './components/pop'
import Provisioning from './components/provisioning'

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


let WorkOrders = React.createClass({
  mixins: [State],

  getOrderId() {
    return Number(this.getParams().id || 1538);
  },

  render() {
    return (
      <div>
        <TopNav />
        <Layout type="main">
          <LeftNav />
          <Content>
            <div>
              <div className="section-header">
                <h1>Work Order: View/Upload Files</h1>
              </div>
            </div>
          </Content>
        </Layout>
        <Footer />
      </div>
    )
  }
});

export default WorkOrders;
