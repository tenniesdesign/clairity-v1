import React, {PropTypes} from 'react'
import DropDown from './dropDown'
import {Map} from 'immutable'
import {
  networkCollectionRenderer
} from './networkRenderer'

class CollectionDropdownView extends React.Component {
  getMenuItems() {
    return this.props.collection.map(o => new Map({
      label: o.get(this.props.labelKey),
      value: o.get(this.props.valueKey)
    })).unshift(new Map({label: '', value: ''}));
  }
  render() {
    return <DropDown {...this.props}
                     menuItems={this.getMenuItems()} />
  }
}

CollectionDropdownView.defaultProps = {
  labelKey: 'name',
  valueKey: 'id'
}

export function collectionDropdown(tableName) {
  return networkCollectionRenderer(CollectionDropdownView, {
    tableName,
    propName: 'collection'
  });
};