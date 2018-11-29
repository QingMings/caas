/* eslint-disable no-underscore-dangle */

import ipcMsgHandler from './ipcMsgHandler';
import { constants } from './resource';

export default class Ipc {
  constructor(listener, sender) {
    this.listener = listener;
    this.sender = sender;
    this.addListener(constants.CLIENT_NORMAL_MSG, this.handleFn.bind(this));
    this.handlerList = ipcMsgHandler(this);
  }

  handleFn(event, data) {
    try {
      this.handlerList[data.type](event, data.data);
    } catch (error) {
      console.error(`handler event error:${error.message}`);
    }
  }

  addListener(chanel, cb) {
    this.listener.on(chanel, cb);
  }

  _sendMsg(chanel, msgBody) {
    this.sender.send(chanel, msgBody);
  }

  sendToClient(type, data) {
    this._sendMsg(constants.CRAWLER_NORMAL_MSG, {
      type,
      data
    });
  }
}
