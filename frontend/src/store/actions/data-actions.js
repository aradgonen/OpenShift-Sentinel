import {
    FETCH_NAMESPACES_PENDING,
    FETCH_NAMESPACES_SUCCESS,
    FETCH_NAMESPACES_ERROR,
    FETCH_PODS_PENDING,
    FETCH_PODS_SUCCESS,
    FETCH_PODS_ERROR,
    FETCH_AUDITLOG_PENDING,
    FETCH_AUDITLOG_SUCCESS,
    FETCH_AUDITLOG_ERROR
  } from "./data-types";
  
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
  export function fetchAuditDataRequest() {
    return {
      type: FETCH_AUDITLOG_PENDING
    };
  }
  
  export function fetchAuditDataSuccess(item) {
    return {
      type: FETCH_AUDITLOG_SUCCESS,
      item
    };
  }
  
  export function fetchAudotDataError(error) {
    return {
      type: FETCH_AUDITLOG_ERROR,
      payload: { error }
    };
  }
  
