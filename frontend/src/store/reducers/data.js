import {FETCH_NAMESPACES_PENDING, FETCH_NAMESPACES_SUCCESS, FETCH_NAMESPACES_ERROR,FETCH_PODS_PENDING,FETCH_PODS_SUCCESS,FETCH_PODS_ERROR, FETCH_AUDITLOG_PENDING, FETCH_AUDITLOG_SUCCESS, FETCH_AUDITLOG_ERROR} from '../actions/data-types';

const initialState = {
    pending: false,
    namespaces: [],
    pods: [],
    audit: [],
    error: null
}
function dataReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NAMESPACES_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_NAMESPACES_SUCCESS:
            return {
                ...state,
                pending: false,
                namespaces: action.item,
                pods: state.pods,
                audit: state.audit
            }
        case FETCH_NAMESPACES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            }
        case FETCH_PODS_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_PODS_SUCCESS:
            return {
                ...state,
                pending: false,
                pods: action.item,
                namespaces: state.namespaces,
                audit: state.audit
            }
        case FETCH_PODS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            }
        case FETCH_AUDITLOG_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_AUDITLOG_SUCCESS:
            return {
                ...state,
                pending: false,
                pods: state.pods,
                namespaces: state.namespaces,
                audit: action.item
            }
        case FETCH_AUDITLOG_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            }
        default: 
            return state;
    }
}

export default dataReducer;