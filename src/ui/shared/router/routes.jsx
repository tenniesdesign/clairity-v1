import React from 'react'
import {
  Route,
  RouteHandler,
  DefaultRoute,
  NotFoundRoute,
  Redirect
} from 'react-router'

import { App, NavigationLayout } from '../../app'

import Testbed from '../../testbed'

/* Session Management */
import Login from '../../login'
import Settings from '../../settings'

/* Reports */
import AgingReports from '../../reports/aging'
import OpenInstalls from '../../openInstalls'

/* Accounts */
import ViewAccount from '../../accounts'
import ListAccounts from '../../accounts/all'

/* Users */
import ViewUser from '../../users'
import ListUsers from '../../users/all'
import CreateUser from '../../users/create'

/* Locations */
import ViewLocation from '../../locations'
import EditLocation  from '../../locations/edit'
import ListLocations from '../../locations/list'
import AddLocation from '../../locations/create'

/* Contacts */
import ViewContact from '../../contacts'
import ViewLeads from '../../contacts/leads'
import ListContacts from '../../contacts/list'
import CreateContact from '../../contacts/create'
import AllContacts from '../../contacts/all'

/* Contracts */
import CreateContract from '../../contracts/create'
import ListContracts from '../../contracts/list'

/* Opportunities */
import ViewOpportunity from '../../opportunities'
import EditOpportunity from '../../opportunities/edit'
import ListOpportunities from '../../opportunities/list'
import CreateOpportunity from '../../opportunities/create'
import CreateUnlinkedOpportunity from '../../opportunities/create/unlinked'

/* Ip Zones */
import IpZones from '../../ipZones'
import EditIpZone from '../../ipZones/edit'
import ViewIpZone from '../../ipZones/view'
import CreateIpZone from '../../ipZones/create'

/* Ip Blocks */
import IpBlocks from '../../ipBlocks'
import EditIpBlock from '../../ipBlocks/edit'
import ViewIpBlock from '../../ipBlocks/view'
import CreateIpBlock from '../../ipBlocks/create'

/* Work Orders */
import WorkOrders from '../../workOrders'
import WorkOrderUpload from '../../workOrders/upload'

/* Tickets */
import Tickets from '../../tickets'
import CreateTicket from '../../tickets/create'

/* Purchase Requests */
import PurchaseRequests from '../../purchaseRequests'
import CreatePurchaseRequest from '../../purchaseRequests/create'

/* Support Notes */
import ListSupportNotes from '../../supportNotes/all'
import AccountSupportNotes from '../../supportNotes'

export default (
  <Route>
    <Redirect from="/" to="login" />
    <Route handler={App} >

      <Route name="testbed" handler={Testbed} />

      <Route name="login" path="/login" handler={Login} />
      <Route name="root-layout" path="/" handler={NavigationLayout}>

        <Route {/***** Aging Reports *****/...{}}>
          <Route name="aging-reports" handler={AgingReports} />
        </Route>

        <Route {/***** IP Blocks *****/...{}}>
          <Redirect from="ip-blocks" to="all-ip-blocks" />
          <Route name="ip-blocks" path="ip-blocks" handler={RouteHandler}>
            <Route name="all-ip-blocks" path="all" handler={IpBlocks} />
            <Route name="view-ip-block" path=":blockId" handler={RouteHandler}>
              <DefaultRoute name="view-ip-block-index" handler={ViewIpBlock} />
              <Route name="edit-ip-block" path="edit" handler={EditIpBlock} />
            </Route>
            <Route name="create-ip-block" path="create" handler={CreateIpBlock} />
          </Route>
        </Route>

        <Route {/***** IP Zones *****/...{}}>
          <Route name="ip-zones" handler={IpZones} />
          <Route name="ip-zone" path="ip-zone" handler={RouteHandler}>
            <DefaultRoute name="view-ip-zone" handler={ViewIpZone} />
            <Route name="create-ip-zone" path="create" handler={CreateIpZone} />
            <Route name="edit-ip-zone" path=":zoneId/edit" handler={EditIpZone} />
          </Route>
        </Route>

        <Route {/***** Accounts *****/...{}}>

          <Redirect from="accounts" to="all-accounts" />
          <Route name="accounts" handler={RouteHandler}>
            <Route name="all-accounts" path="all" handler={ListAccounts} />

            <Route path=":accountId" handler={RouteHandler}>
              <DefaultRoute name="view-account" handler={ViewAccount} />

              <Route name="all-account-support-notes" path="support" handler={AccountSupportNotes} />

              <Redirect from="account-locations" to="all-account-locations" />
              <Route name="account-locations" path="locations" handler={RouteHandler}>

                <Route name="all-account-locations" handler={ListLocations} />
                <Route name="view-account-location" path=":locationId" handler={ViewLocation} />
                <Route name="add-account-location" path="add" handler={AddLocation} />
                <Route name="edit-account-location" path="edit" handler={EditLocation} />
              </Route>

              <Route path="edit" name="edit-account" handler={EditLocation} />

              <Redirect from="account-contacts" to="all-account-contacts" />
              <Route name="account-contacts" path="contacts" handler={RouteHandler}>
                <Route name="all-account-contacts" handler={ListContacts} />
                <Route name="view-account-contact" path=":contactId" handler={ViewContact} />
                <Route name="add-account-contact" path="add" handler={CreateContact} />
              </Route>

              <Redirect from="account-opps" to="all-account-opps" />
              <Route name="account-opps" path="opps" handler={RouteHandler}>
                <Route name="all-account-opps" handler={ListOpportunities} />
                <Route name="view-account-opp" path=":oppId" handler={ViewOpportunity} />
                <Route name="add-account-opp" handler={CreateOpportunity} />

              </Route>

              <Redirect from="account-contracts" to="all-account-contracts" />
              <Route name="account-contracts" path="contracts" handler={RouteHandler}>
                <Route name="all-account-contracts" path="all" handler={ListContracts} />
                <Route name="view-account-contracts" path=":contractId" handler={ListContracts} />
                <Route name="add-account-contract" path="add" handler={CreateContract} />
              </Route>

            </Route>
          </Route>
        </Route>

        <Route {/***** Opportunities *****/...{}}>
          <Redirect from="opps" to="all-opps" />
          <Route name="opps" handler={RouteHandler}>
            <Route path=":oppId" handler={RouteHandler}>
              <DefaultRoute name="view-opp" handler={ViewOpportunity} />
              <Route name="edit-opp" path="edit" handler={EditOpportunity} />
              <Route name="opps-contacts" path="contacts" handler={RouteHandler}>
                <DefaultRoute name="opps-contact-list" handler={RouteHandler} />
                <Route name="add-opp-contact" path="add" handler={CreateOpportunity} />
              </Route>
            </Route>
            <Route name="new-opp" path="create" handler={CreateUnlinkedOpportunity} />
            <Route name="all-opps" path="all" handler={ListOpportunities} />
          </Route>
        </Route>

        <Route {/***** Contacts *****/...{}}>
          <Redirect from="contacts" to="all-contacts" />
          <Route name="contacts" handler={RouteHandler}>
            <Route name="all-contacts" path="all" handler={AllContacts} />
            <Route path=":contactId" handler={RouteHandler}>
              <DefaultRoute name="view-contact" handler={ViewContact} />
              <Route name="contact-opps" path="opps" handler={RouteHandler}>
                <DefaultRoute name="contact-opps-list" handler={RouteHandler} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route {/***** Leads *****/...{}}>
          <Redirect from="leads" to="all-leads" />
          <Route name="leads" handler={RouteHandler}>
            <Route name="all-leads" path="all" handler={ViewLeads} />
            <Route path=":contactId/:userId" handler={RouteHandler}>
              <Route name="add-contact-opp" path="convert" handler={CreateOpportunity} />
            </Route>
          </Route>
        </Route>

        <Route {/***** Users *****/...{}}>
          <Redirect from="users" to="all-users" />
          <Route name="users" handler={RouteHandler} >
            <Route name="all-users" path="all" handler={ListUsers} />
            <Route name="add-user" path="create" handler={CreateUser} />
            <Route path=":userId" name="view-user" handler={ViewUser} />
          </Route>
        </Route>

        <Route {/***** Open Intstalls *****/...{}}>
          <Route name="open-installs" handler={OpenInstalls} />
        </Route>

        <Route {/***** Purchase Requests *****/...{}}>
          <Redirect from="purchase-requests" to="all-purchase-requests" />
          <Route name="purchase-requests" handler={RouteHandler} >
            <Route name="all-purchase-requests" path="all" handler={PurchaseRequests} />
            <Route name="add-purchase-request" path="create" handler={CreatePurchaseRequest} />
          </Route>
        </Route>

        <Route {/***** Support Notes *****/...{}}>
          <Redirect from="support-notes" to="all-support-notes" />
          <Route name="support-notes" handler={RouteHandler} >
            <Route name="all-support-notes" path="all" handler={ListSupportNotes} />
            <Route name="all-support-notes-account" path=":accountId" handler={AccountSupportNotes} />
          </Route>
        </Route>

        <Route {/***** Tickets *****/...{}}>
          <Redirect from="tickets" to="all-tickets" />
          <Route name="tickets" handler={RouteHandler} >
            <Route name="all-tickets" path="all" handler={Tickets} />
            <Route name="add-ticket" path="create" handler={CreateTicket} />
          </Route>
        </Route>

        <Route {/***** Work Orders *****/...{}}>
          <Route name="work-orders" path="work-orders/:id" handler={WorkOrders}>
            <Route name="work-order-upload" path="upload" handler={WorkOrderUpload} />
          </Route>
        </Route>

        <Route {/***** Settings *****/...{}}>
          <Route name="settings" handler={Settings} />
        </Route>

      </Route>
    </Route>
  </Route>
);
