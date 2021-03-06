import { getContact } from './contact'
import { getLocation } from './location'
import { getWorkOrder } from './workOrder'
import { getContract } from './contract'
import { getUser } from './users'
import { getAccount } from './account'
import { getTicket } from './ticket'
import { getOpportunity, getSale } from './opportunity'
import { getSupportNote } from './supportNote'

const resource = {
  contact: getContact,
  location: getLocation,
  workorder: getWorkOrder,
  contract: getContract,
  lead: getContact,
  user: getUser,
  account: getAccount,
  opportunity: getOpportunity,
  ticket: getTicket,
  supportNote: getSupportNote
};

export function getResource(id, tableName) {
  return resource[tableName.toLowerCase()](id);
}

export function model(args) {
  let { id, table } = args;
  return getResource(id, table);
}

import { getContactsByAccount, getContactsByOpportunity, getContactsByLocation } from './contact'
import { getOpportunitiesByAccount} from './opportunity'
import { getContractsByAccount, getContractsByLocation } from './contract'
import { getAccountsByAgent, getAccountsByContact } from './account'
import { getLocationsByPop, getLocationsByContact, getLocationsByStatus, getLocationsByAccount } from './location'
import { getWorkOrderMessagesByWorkOrder } from './messages'
import { getSupportNotesByAccount } from './supportNote'

const resourceVia = {
  workOrderMessage: {
    workOrder: getWorkOrderMessagesByWorkOrder
  },
  contact: {
    account: getContactsByAccount,
    opportunity: getContactsByOpportunity,
    location: getContactsByLocation
  },
  supportNote: {
    account: getSupportNotesByAccount
  },
  contract: {
    account: getContractsByAccount,
    location: getContractsByLocation
  },
  opportunity: {
    account: getOpportunitiesByAccount
  },
  account: {
    user: getAccountsByAgent,
    contact: getAccountsByContact
  },
  location: {
    pop: getLocationsByPop,
    contact: getLocationsByContact,
    locationStatus: getLocationsByStatus,
    account: getLocationsByAccount
  }
};

export function getCollectionVia(resourceTable, throughTable, throughId) {
  return resourceVia[resourceTable][throughTable](throughId);
}

export function collectionVia(args) {
  let { table, filterTable, filterId } = args;
  return getCollectionVia(table, filterTable, filterId);
}


import { getPops } from './pop'
import { getAccounts, getAccountTypes } from './account'
import { getWorkOrderTypes, getWorkOrderStatuses } from './workOrder'
import { getLeads } from './contact'
import { getContacts } from './contact'
import { getProjectTypes } from './projectType'
import { getSalesStages } from './salesStage'
import { getLeadSources } from './leadSource'
import { getCampaignSources } from './campaignSource'
import { getServiceTypes } from './serviceType'
import { getLocations } from './location'
import { getSupportNotes } from './supportNote'
import { getUsers } from './users'
import { getPurchaseRequests } from './purchaseRequest'
import { getTickets, getTicketTemplates, getTicketStatuses, getTicketPriorities } from './ticket'

const collectionMap = {
  pop: getPops,
  account: getAccounts,
  accountType: getAccountTypes,
  workOrderType: getWorkOrderTypes,
  workOrderStatus: getWorkOrderStatuses,
  lead: getLeads,
  contact: getContacts,
  projectType: getProjectTypes,
  salesStage: getSalesStages,
  leadSource: getLeadSources,
  campaignSource: getCampaignSources,
  serviceType: getServiceTypes,
  ticket: getTickets,
  ticketTemplate: getTicketTemplates,
  ticketStatus: getTicketStatuses,
  ticketPriority: getTicketPriorities,
  purchaseRequest: getPurchaseRequests,
  user: getUsers,
  supportNote: getSupportNotes
};

export function getCollection(tableName) {
  return collectionMap[tableName]();
}

export function collection(args) {
  let { table } = args;
  return getCollection(table);
}
