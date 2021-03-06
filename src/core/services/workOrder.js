// import data from './stubs/orders'
import _ from 'lodash'
import moment from 'moment'

import req from 'superagent'

import { withDelay } from 'memoize-promise'

const memoize = withDelay(10000); // ten second delay

let getWorkOrder = memoize(id => {
  return new Promise((s, f) => {
    req.get(`https://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.WorkOrderDAO&_m=getWorkOrderById&id=${id}`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          let wo = JSON.parse(res.text);
          wo.services = wo.services.map(s => s.id = +s.id)
          s(wo);
        } else {
          f(err);
        }
      });
  });
});

let getWorkOrderMessages = memoize(id => {
  return new Promise((s, f) => {
    req.get(`https://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.WorkOrderMessageDAO&_m=getAllWorkOrderMessagesByWorkOrderId&work_order_id=${id}`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      });
  });
});

let getWorkOrderTypes = memoize(() => {
  return new Promise((s, f) => {
    req.get(`https://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.WorkOrderTypeDAO&_m=getAllWorkOrderTypes`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      });
  });
});

let getWorkOrderStatuses = memoize(() => {
  return new Promise((s, f) => {
    req.get(`https://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.WorkOrderStatusDAO&_m=getAllWorkOrderStatuses`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      });
  });
});

export {
  getWorkOrder, getWorkOrderMessages, getWorkOrderTypes, getWorkOrderStatuses
};

import { eventUpdateWorkOrder } from '../gateways/workOrder'

export function putWorkOrder(id, data) {
    return new Promise((s, f) => {
      req.post(`https://lab.rairity.com/controller.cfm?event=updateWorkOrders`)
        .withCredentials()
        .type('form')
        .send(eventUpdateWorkOrder(data))
        .end((err, res) => {
          if (res.ok && res.xhr.responseURL.match(/controller\.cfm/i)) {
            return getWorkOrder(id);
          } else {
            f(err);
          }
        });
    });
}
