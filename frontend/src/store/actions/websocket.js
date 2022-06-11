import {getWebsocketError,getWebsocketPending,getWebsocketSuccess} from "./websocket-actions";

import WebsocketService from "../../services/websocket.service";
export function setMessages(message){
  return dispatch => {
    // dispatch(getWebsocketPending());
    // WebsocketService.subscribe_to_messages.then(response => {
    //   dispatch(getWebsocketSuccess(response.data));
    // })
    // .catch(error => {
    //   dispatch(fetchDataError(error))
    // })
    dispatch(getWebsocketSuccess(message));
  }
}
