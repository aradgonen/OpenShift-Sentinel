import {GET_WS_MESSAGE_ERROR,GET_WS_MESSAGE_PENDING,GET_WS_MESSAGE_SUCCESS,GET_WS_MESSAGE_DEAD} from '../actions/websocket-types';

const initialState = {
    pending: false,
    messages: [],
    dead: [],
    error: null
}
function websocketReducer(state = initialState, action) {
    switch(action.type) {
        case GET_WS_MESSAGE_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case GET_WS_MESSAGE_SUCCESS:
            return {
                ...state,
                pending: false,
                messages:  [...new Set([...state.messages,action.item])],
                dead: state.dead
            }
        case GET_WS_MESSAGE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            }
        case GET_WS_MESSAGE_DEAD:
            return {
                ...state,
                pending: false,
                messages:  state.messages.filter(message => message.uid !== action.item.message),
                dead: [...new Set([...state.dead,action.item])],
            }
        default: 
            return state;
    }
}

export default websocketReducer;