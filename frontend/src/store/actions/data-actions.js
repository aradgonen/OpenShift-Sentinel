import {FETCH_NAMESPACES_PENDING, FETCH_NAMESPACES_SUCCESS, FETCH_NAMESPACES_ERROR,FETCH_PODS_PENDING,FETCH_PODS_SUCCESS,FETCH_PODS_ERROR, FETCH_AUDIT_EVENT_COUNT_BY_USER_PENDING, FETCH_AUDIT_EVENT_COUNT_BY_USER_SUCCESS, FETCH_AUDIT_EVENT_COUNT_BY_USER_ERROR,FETCH_AUDIT_URI_COUNT_BY_USER_PENDING, FETCH_AUDIT_URI_COUNT_BY_USER_SUCCESS, FETCH_AUDIT_URI_COUNT_BY_USER_ERROR, FETCH_ALL_AUDIT_ERROR,FETCH_ALL_AUDIT_PENDING,FETCH_ALL_AUDIT_SUCCESS} from './data-types';

  
  export function fetchDataRequest() {
    return {
      type: FETCH_NAMESPACES_PENDING
    };
  }
  
  export function fetchDataSuccess(item) {
    return {
      type: FETCH_NAMESPACES_SUCCESS,
      item
    };
  }
  
  export function fetchDataError(error) {
    return {
      type: FETCH_NAMESPACES_ERROR,
      payload: { error }
    };
  }
  export function fetchPodsDataRequest() {
    return {
      type: FETCH_PODS_PENDING
    };
  }
  
  export function fetchPodsDataSuccess(item) {
    return {
      type: FETCH_PODS_SUCCESS,
      item
    };
  }
  
  export function fetchPodsDataError(error) {
    return {
      type: FETCH_PODS_ERROR,
      payload: { error }
    };
  }
  export function fetchAuditEventCountByUserRequest() {
    return {
      type: FETCH_AUDIT_EVENT_COUNT_BY_USER_PENDING
    };
  }
  
  export function fetchAuditEventCountByUserSuccess(item) {
    return {
      type: FETCH_AUDIT_EVENT_COUNT_BY_USER_SUCCESS,
      item
    };
  }
  
  export function fetchAuditEventCountByUserError(error) {
    return {
      type: FETCH_AUDIT_EVENT_COUNT_BY_USER_ERROR,
      payload: { error }
    };
  }
  export function fetchAuditUriCountByUserRequest() {
    return {
      type: FETCH_AUDIT_URI_COUNT_BY_USER_PENDING
    };
  }
  
  export function fetchAuditUriCountByUserSuccess(item) {
    return {
      type: FETCH_AUDIT_URI_COUNT_BY_USER_SUCCESS,
      item
    };
  }
  
  export function fetchAuditUriCountByUserError(error) {
    return {
      type: FETCH_AUDIT_URI_COUNT_BY_USER_ERROR,
      payload: { error }
    };
  }
  export function fetchAllAuditRequest() {
    return {
      type: FETCH_ALL_AUDIT_PENDING
    };
  }
  
  export function fetchAllAuditSuccess(item) {
    return {
      type: FETCH_ALL_AUDIT_SUCCESS,
      item
    };
  }
  
  export function fetchAllAuditError(error) {
    return {
      type: FETCH_ALL_AUDIT_ERROR,
      payload: { error }
    };
  }
  
