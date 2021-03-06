import _ from 'lodash'
import moment from 'moment'

import req from 'superagent'

export function getServiceTypes() {
  return new Promise((s, f) => {
    req.get("https://lab.rairity.com/controller.cfm?event=serialize&authkey=tardis&_c=ample.dao.ServiceTypeDAO&_m=getAllServiceTypes")
      .withCredentials()
      .end((err, res) => {
        if(!err){
          let order = JSON.parse(res.text);
          s(order);
        } else {
          f(err);
        }
      });
  });
}
