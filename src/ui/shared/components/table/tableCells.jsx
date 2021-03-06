import React, { Component, Children } from 'react'
import {
  IconButton,
  Toggle,
  FloatingActionButton,
  FontIcon,
  Utils,
  Styles
} from 'material-ui'
import Link from '../link'
import async, { model } from '../async'
import numeral from 'numeral'
import _ from 'lodash'
import { contextTypes } from '../../decorators'

import SendIcon from 'material-ui/lib/svg-icons/content/send'

/************* Agent / User *************/

import UserName from '../../../users/public/link'
export class AgentCell extends Component {
  render() {
    return <UserName {...this.props}>{this.props.children}</UserName>
  }
}

const UserNameAsync = async(UserName, { user: model() });

export class AgentByIdCell extends Component {
  render() {
    const userId = Children.only(this.props.children);
    return <UserNameAsync {...Object.assign({}, this.props, { userId })} />
  }
}

/************* Account / Customer *************/

import AccountName from '../../../accounts/public/link'
const AccountNameAsync = async(AccountName, { account: model() });
export class AccountCell extends Component {
  render() {
    return <AccountName {...this.props}>{this.props.children}</AccountName>
  }
}

export class AccountByIdCell extends Component {
  render() {
    const accountId = Children.only(this.props.children);
    return (
      <AccountNameAsync {...Object.assign({}, this.props, { accountId })} />
    )
  }
}

/************* Location *************/

import LocationName from '../../../locations/public/link'
const LocationNameAsync = async(LocationName, { location: model() })
export class LocationCell extends Component {
  render() {
    return <LocationName {...this.props}>{this.props.children}</LocationName>
  }
}

export class LocationByIdCell extends Component {
  render() {
    const locationId = Children.only(this.props.children);
    return (
      <LocationNameAsync {...Object.assign({}, this.props, { locationId })} />
    )
  }
}

/************* Contact / Caller *************/

import ContactName from '../../../contacts/public/link'
const ContactNameAsync = async(ContactName, { contact: model() });

export class ContactCell extends Component {
  render() {
    return <ContactName>{this.props.children}</ContactName>
  }
}

export class ContactByIdCell extends Component {
  render() {
    const contactId = Children.only(this.props.children);
    return <ContactNameAsync {...Object.assign({}, this.props, { contactId })} />;
  }
}

/************* Send *************/
@contextTypes({ muiTheme: React.PropTypes.object })
export class SendCell extends Component {
  render() {
    return (
      <div style={_.assign({textAlign: 'center'}, this.props.cellStyle)} >
        <Link to={(this.props.to) ? this.props.to :'/'}>
          <SendIcon style={_.assign({
              fill: Utils.ColorManipulator
                .fade(this.context.muiTheme.palette.textColor, 0.6),
              verticalAlign: 'middle'
            }, this.props.iconStyle
          )} />
        </Link>
      </div>
    );
  }
}

/************* String *************/

export class StringCell extends Component {
  render() {
    return (
      <div style={_.assign({}, this.props.cellStyle)}>
        {this.props.children}
      </div>
    );
  }
}

/************* Number *************/

export class NumberCell extends Component {
  render() {
    return (
      <div style={_.assign({}, this.props.cellStyle)} >
        { numeral(this.props.children).format('0,0.0000') }
      </div>
    );
  }
}

/************* Date *************/

export class DateCell extends Component {
  formatDate(c) {
    if(c) {
      var d = new Date(c);
      c = d.toLocaleDateString();
    }
    return c;
  }
  render() {
    return (
      <div style={_.assign({}, this.props.cellStyle)}>
        {this.formatDate(this.props.children)}
      </div>
    );
  }
}

/************* Currency *************/

export class CurrencyCell extends Component {
  render() {
    return (
      <div style={_.assign({ fontWeight: 'bold' }, this.props.cellStyle)}>
        {numeral(this.props.children).format('$0,0.00')}
      </div>
    );
  }
}

/************* Link *************/

export class LinkCell extends Component {
  render() {
    return (
      <Link style={_.assign({}, this.props.cellStyle)}
            to={(this.props.to) ? this.props.to :'/'}>
        {this.props.children}
      </Link>
    );
  }
}

/************* Uri *************/

export class UriCell extends Component {
  render() {
    return (
      <a  style={_.assign({}, this.props.cellStyle)}
          href={(this.props.href) ? this.props.href : '#'}>
          {this.props.children}
      </a>
    );
  }
}

/************* Button *************/

export class ButtonCell extends Component {
  render() {
    <div style={_.assign({textAlign: 'center'}, this.props.cellStyle)}>
      <RaisedButton label={this.props.children} />
    </div>;
  }
}

/************* Boolean *************/

export class BooleanCell extends Component {
  style() {
    return {
        true: { color: Styles.Colors.green500 },
        false: { color: Styles.Colors.red500 }
    }
  }
  render() {
    let style = (this.props.cellClasses) ?
                  _.assign(
                    this.style()[this.props.cellClasses[this.props.children]],
                    this.props.cellStyle)
                :
                  this.props.cellStyle;
    return <div style={style}>{this.props.children}</div>;
  }
}

/************* Range *************/

export class RangeCell extends Component {
  style() {
    return {
        0: { color: Styles.Colors.green500 },
        1: { color: Styles.Colors.yellow500 },
        2: { color: Styles.Colors.amber500 },
        3: { color: Styles.Colors.orange500 },
        4: { color: Styles.Colors.red500 }
    }
  }
  render() {
    return  <div style={_.assign(
              this.style()[this.props.cellClasses[this.props.children]],
              this.props.cellStyle
            )}>
              {this.props.children}
            </div>;
  }
}

/************* Object *************/

export class ObjectCell extends Component {
  render() {
    return  (
      <div style={ this.props.cellStyle }>
        {this.props.children[this.props.show]}
      </div>
    )
  }
}

let CellTypes = {
    string: StringCell,
    number: NumberCell,
    date: DateCell,
    currency: CurrencyCell,
    uri: UriCell,
    link: LinkCell,
    button: ButtonCell,
    boolean: BooleanCell,
    account: AccountCell,
    accountById: AccountByIdCell,
    contact: ContactCell,
    contactById: ContactByIdCell,
    agent: AgentCell,
    agentById: AgentByIdCell,
    location: LocationCell,
    locationById: LocationByIdCell,
    send: SendCell,
    range: RangeCell,
    object: ObjectCell

};

export {CellTypes};
