/**
 * This page is purely for testing components, making sure new features work,
 * etc.
 */

import React, { PropTypes, Component } from 'react'
import { contextTypes } from '../shared/decorators'
import {
  asyncTokenizer
} from '../shared/components/collectionDropdown'
import async, { action, query, collection } from '../shared/components/async'

let NotifyTokenizer = asyncTokenizer({ collection: collection('contact').all() });

@contextTypes({muiTheme: PropTypes.object})
class TestbedPage extends Component {
  render() {
    return (
      <NotifyTokenizer />
    )
  }
}

export default TestbedPage;
