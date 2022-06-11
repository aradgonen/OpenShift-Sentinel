import { combineReducers } from 'redux';
import auth from './auth';
import theme from './theme';
import dataReducer from './data';
import websocketReducer from './websocket';
const rootReducer = combineReducers({ 
    auth: auth,
    theme: theme,
    data: dataReducer,
    ws: websocketReducer
})

export default rootReducer;