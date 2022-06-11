import {GET_WS_MESSAGE_ERROR,GET_WS_MESSAGE_PENDING,GET_WS_MESSAGE_SUCCESS} from './websocket-types';

  
  export function getWebsocketPending() {
    return {
      type: GET_WS_MESSAGE_PENDING
    };
  }
  
  export function getWebsocketSuccess(item) {
    return {
      type: GET_WS_MESSAGE_SUCCESS,
      item
    };
  }
  export function getWebsocketError(error) {
    return {
      type: GET_WS_MESSAGE_ERROR,
      payload: { error }
    };
  }