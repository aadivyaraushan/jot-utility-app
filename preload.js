const {contextBridge} = require('electron')
const Store = require('electron-store')
const store = new Store();

contextBridge.exposeInMainWorld('store', {
    get: (key) => store.get(key),
    set: (key, value) => store.set(key, value),
})