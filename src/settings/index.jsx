
import React, {PropTypes} from 'react'
import Layout from  '../shared/components/layout'
import Footer from  '../shared/components/footer'
import TopNav from '../shared/components/topnav'
import LeftNav from '../shared/components/leftnav'
import Content from '../shared/components/content'
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

import {Navigation} from 'react-router'

let OpenInstalls = React.createClass({
  mixins: [Navigation],

  render() {
    return (
      <Layout widths={{ lg: [6,6], sm: [12]}}>
        <Paper>
          one
        </Paper>
        <Paper>
          two
        </Paper>
        <Paper>
          three
        </Paper>
      </Layout>
    );
  }
});

export default OpenInstalls;
