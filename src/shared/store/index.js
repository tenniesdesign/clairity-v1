
import Store from '@brainbytes/immutable-store'

import schema from './schema'

let appStore = new Store(schema);
appStore.MessageTypes = Store.MessageTypes;
appStore.Queries = {};

export default appStore;

window.Store = appStore;