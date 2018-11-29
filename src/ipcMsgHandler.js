/* eslint-disable */
import { shell } from 'electron';
import { menu } from './resource';
const handlerList = _ipc => ({
  ['open-shell'](event, url) {
    shell.openExternal(url);
  },
  ['hello'](event, category) {
    const requestBack = (data) => {
      _ipc.sendToClient('request-back', data);
    };

    requestBack({ success: true, data: category});
  },
  ['init-menu'](event,param) {
    const requestBack = (data) => {
      _ipc.sendToClient('response-menu',data);
    };
    requestBack({
      success: true,
      data: menu
    })
  }
});

export default handlerList
