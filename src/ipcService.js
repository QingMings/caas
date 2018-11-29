/* eslint-disable no-unused-expressions,no-param-reassign */
import { ipcRenderer } from 'electron';
import { constants } from './resource';

const ipcService = Object.create(null);
const callbackCache = [];
ipcService.install = function(Vue, options) {
  Vue.prototype.$ipcRenderer = {
    send: (msgType, msgData) => {
      ipcRenderer.send(constants.CLIENT_NORMAL_MSG, {
        type: msgType,
        data: msgData
      });
    },
    on: (type, callback) => {
      callbackCache.push({
        type,
        callback
      });
    },
    detach: (type) => {
      const idx = callbackCache.findIndex(v => v.type === type);
      idx > -1 ? callbackCache.splice(idx, 1) : console.error(`error type ${type}`);
    }
  };
};

ipcRenderer.on(constants.CRAWLER_NORMAL_MSG, (sender, msg) => {
  callbackCache.forEach((cache) => {
    if (cache.type === msg.type) {
      cache.callback && cache.callback(msg.data);
    }
  });
});

export default ipcService;
