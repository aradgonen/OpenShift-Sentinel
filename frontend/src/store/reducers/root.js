import { combineReducers } from 'redux';
import auth from './auth';
import theme from './theme';

const rootReducer = combineReducers({ 
    auth: auth,
    theme: theme,
})

export default rootReducer;