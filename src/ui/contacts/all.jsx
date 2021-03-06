import React, { PropTypes, Component } from 'react'
import async, { collection } from '../shared/components/async'
import { asyncDropdown } from '../shared/components/collectionDropdown'
import { contextTypes } from '../shared/decorators'
import Link from '../shared/components/link'
import { FontIcon, ClearFix } from 'material-ui'
import {
  Paper
} from 'material-ui'
import Table, {} from '../shared/components/table'
import DetailRow, {} from '../shared/components/details/detailRow'
import LangText from '../shared/components/langText'

@async({ contacts: collection('contact').all() })
@contextTypes({ muiTheme: PropTypes.object, lang: PropTypes.object })
class ListContacts extends Component {
  style() {
      return {
        root: {},
        icon: {
          float: 'left',
          color: this.context.muiTheme.palette.primary1Color
        },
        link: {
          float: 'left',
          color: this.context.muiTheme.palette.textColor,
          lineHeight: '25px',
          marginLeft: '10px'
        }
      }
  }
  getContacts() {
    return {
      colNames: [
        { label: this.context.lang('Name'), name: 'name', cellType: 'contact' }
      ],
      data: this.props.contacts
    }
  }
  render() {
    let contacts = this.props.contacts || [];
    return (
      <div style={this.style().root}>
        <h1><LangText>Contacts</LangText></h1>
        <Table {...this.getContacts() }/>
      </div>
    );
  }
}

export default ListContacts;
