import React, { Component, PropTypes } from 'react'
import Header from '../shared/components/header'
import Layout from '../shared/components/layout'
import Table from '../shared/components/table'
import Cards from '../shared/components/cards'

import async, { collection, model } from '../shared/components/async'
import { propTypes } from '../shared/decorators'

import {
  FilteredCollection, Filters, CheckBoxFilter, TextFilter, RadioButtonFilter
} from '../shared/components/filteredCollection'

@async({ accounts: collection('account').all() })
@propTypes({ accounts: PropTypes.array.isRequired })
class ViewAccounts extends Component {
  getAccounts(accounts) {
    return {
      colNames: [
        { label: 'Account', name: 'name', cellType: 'account', props: { idField: 'id'} },
        { label: 'Account Owner', name: 'user_id' }
      ],
      data: accounts,
      colWidths: [1],
      widthAdj: -30
    };
  }

  render() {
    let accounts = this.props.accounts;

    return (
      <Layout widths={{}} pPadding={'20px 20px 0 0'}>
        <Header><h1>View Accounts</h1></Header>
        <FilteredCollection data={accounts}>
          <Filters>
            <TextFilter name={'name'} label={'Account Name'} />
          </Filters>
          <Cards {...this.getAccounts(accounts)} header={'name'} cardType={'account'} rowHeight={16} linkParam={'id'} />
        </FilteredCollection>
      </Layout>
    );
  }
}

export default ViewAccounts;