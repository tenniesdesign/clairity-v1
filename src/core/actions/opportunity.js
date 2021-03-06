import Fynx from 'fynx'
import Store from '../../core/store'

import { postConvertLead } from '../services/contact'
import { putOpportunity } from '../services/opportunity'

export const convertLead = Fynx.createAsyncAction();
export const updateSalesOpp = Fynx.createAsyncAction();

convertLead.listen(leadInfo => {
  postConvertLead(leadInfo.data).then(a => leadInfo.completed());
});

updateSalesOpp.listen(oppInfo => {
  putOpportunity(oppInfo.data).then(a => oppInfo.completed && oppInfo.completed(a));
});
