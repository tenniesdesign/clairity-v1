
const urlBase = 'https://lab.rairity.com/controller.cfm?event='
// serialize&authkey=tardis&_c=ample.dao.CustomerDAO&_m=getCustomerById&id=${id}'

export function serialize(daoName, methodName, params) {
  return [`${urlBase}serialize&authkey=tardis&_c=ample.dao.${daoName}&_m=${methodName}&` + Object.keys(params).map(k => `${k}=${params[k]}`).join('&'), { credentials: 'include' }];
}
