import { combineReducers } from 'redux';
import auth from './auth';
import theme from './theme';
import dataReducer from './data';

const rootReducer = combineReducers({ 
    auth: auth,
    theme: theme,
    data: dataReducer,
})

export default rootReducer;