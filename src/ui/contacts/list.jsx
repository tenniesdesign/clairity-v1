import React, { PropTypes, Component } from 'react'
import { contextTypes } from '../shared/decorators'
import Link from '../shared/components/link'
import { FontIcon, ClearFix } from 'material-ui'

@contextTypes({ muiTheme: PropTypes.object })
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
  render() {
    return (
      <div style={this.style().root}>
        {
          this.props.contacts.map(o =>
            <ClearFix>
              <Link to="view-contact" params={{contactId: o.id}}>
                <FontIcon className={'md md-account-circle'}
                          style={this.style().icon} />
                <div style={this.style().link}>{o.name}</div>
              </Link>
            </ClearFix>
          )
        }
      </div>
    );
  }
}

export default ListContacts;
