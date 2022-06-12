import {FETCH_NAMESPACES_PENDING, FETCH_NAMESPACES_SUCCESS, FETCH_NAMESPACES_ERROR,FETCH_PODS_PENDING,FETCH_PODS_SUCCESS,FETCH_PODS_ERROR, FETCH_AUDIT_EVENT_COUNT_BY_USER_PENDING, FETCH_AUDIT_EVENT_COUNT_BY_USER_SUCCESS, FETCH_AUDIT_EVENT_COUNT_BY_USER_ERROR,FETCH_AUDIT_URI_COUNT_BY_USER_PENDING, FETCH_AUDIT_URI_COUNT_BY_USER_SUCCESS, FETCH_AUDIT_URI_COUNT_BY_USER_ERROR, FETCH_ALL_AUDIT_ERROR,FETCH_ALL_AUDIT_PENDING,FETCH_ALL_AUDIT_SUCCESS} from '../actions/data-types';

const initialState = {
    pending: false,
    namespaces: [],
    pods: [],
    audit_event_count_by_user: [],
    audit_uri_count_by_user: [],
    all_audit_events: [],
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
                audit_event_count_by_user: state.audit_event_count_by_user,
                audit_uri_count_by_user: state.audit_uri_count_by_user,
                all_audit_events: state.all_audit_events
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
                audit_event_count_by_user: state.audit_event_count_by_user,
                audit_uri_count_by_user: state.audit_uri_count_by_user,
                all_audit_events:state.all_audit_events
            }
        case FETCH_PODS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            }
        case FETCH_AUDIT_EVENT_COUNT_BY_USER_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_AUDIT_EVENT_COUNT_BY_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                pods: state.pods,
                namespaces: state.namespaces,
                audit_event_count_by_user: action.item,
                audit_uri_count_by_user: state.audit_uri_count_by_user,
                all_audit_events:state.all_audit_events
            }
        case FETCH_AUDIT_EVENT_COUNT_BY_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            }

        case FETCH_AUDIT_URI_COUNT_BY_USER_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_AUDIT_URI_COUNT_BY_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                pods: state.pods,
                namespaces: state.namespaces,
                audit_event_count_by_user: state.audit_event_count_by_user,
                audit_uri_count_by_user: action.item,
                all_audit_events:state.all_audit_events
            }
        case FETCH_AUDIT_URI_COUNT_BY_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                item: []
            } 
        case FETCH_ALL_AUDIT_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_ALL_AUDIT_SUCCESS:
            return {
                ...state,
                pending: false,
                pods: state.pods,
                namespaces: state.namespaces,
                audit_event_count_by_user: state.audit_event_count_by_user,
                audit_uri_count_by_user: state.audit_uri_count_by_user,
                all_audit_events:action.item
            }
        case FETCH_ALL_AUDIT_ERROR:
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