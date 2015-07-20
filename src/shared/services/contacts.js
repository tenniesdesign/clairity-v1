// TODO: Memoize network traffic.
// TODO: Integrate network traffic w/ actions implicitly.

import _ from 'lodash'
import moment from 'moment'

import {debug} from '../mixins/debug'

import req from 'superagent'

export function getContact(id) {
  return new Promise((s, f) => {
    req.get(`http://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.ContactDAO&_m=getContactById&id=${id}`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      });
  });
}

export function getContactsByAccount(id) {
  return new Promise((s, f) => {
    req.get(`http://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.ContactDAO&_m=getAllContactsByCustomerId&customer_id=${id}`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      })
  });
}

export function getContactsByOpportunity(id) {
  return new Promise((s, f) => {
    req.get(`http://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.ContactDAO&_m=getAllContactsByOppId&opp_id=${id}`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      })
  });
}

export function getContactsByLocation(id) {
  return new Promise((s, f) => {
    req.get(`http://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.ContactDAO&_m=getAllContactsByLocationId&location_id=${id}`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      })
  });
}

export function getLeads() {
  return new Promise((s, f) => {
    req.get(`http://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.ContactDAO&_m=getAllContactsWithoutOpportunities`)
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          s(JSON.parse(res.text));
        } else {
          f(err);
        }
      });
  });
}

import {eventConvertLead} from '../gateways/contact'

export function postConvertLead(contact) {
  return new Promise((s, f) => {
    patchRequest();
    req.post(`http://lab.rairity.com/controller.cfm?event=convertLead`)
      .withCredentials()
      .type('form')
      .send(eventConvertLead(contact))
      .end((err, res) => {
        if (res.ok && res.xhr.responseURL.match(/controller\.cfm/i)) {
          return s(res);
        } else {
          f(err);
        }
      })
    unpatchRequest();
  });
}

let _s = req.prototype.serialize;

function patchRequest() {
  req.prototype.serialize = function (obj) {
    if (!isObject(obj)) return obj;
    var pairs = [];
    for (var key in obj) {
      if (null != obj[key]) {
        pairs.push(encodeURIComponent(key).replace('%20', '+')
          + '=' + encodeURIComponent(obj[key]).replace('%20', '+'));
      }
    }
    return pairs.join('&');
  };
}

function unpatchRequest() {
  req.prototype.serialize = _s;
}