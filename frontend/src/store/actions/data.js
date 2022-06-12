import {fetchDataRequest,fetchDataSuccess,fetchDataError, fetchPodsDataSuccess,fetchPodsDataRequest,fetchPodsDataError, fetchAuditDataSuccess, fetchAudotDataError, fetchAuditDataRequest, fetchAuditEventCountByUserRequest, fetchAuditEventCountByUserSuccess, fetchAuditEventCountByUserError, fetchAuditUriCountByUserRequest, fetchAuditUriCountByUserSuccess, fetchAuditUriCountByUserError, fetchAllAuditError,fetchAllAuditRequest,fetchAllAuditSuccess} from "./data-actions";

import DataService from "../../services/data.service";
export function fetchNamespaces(){
  return dispatch => {
    dispatch(fetchDataRequest());
    DataService.openshift_list_namespaces().then(response => {
      dispatch(fetchDataSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchDataError(error))
    })
  }
}
export function fetchPodsByNamespcae(){
  return dispatch => {
    dispatch(fetchPodsDataRequest());
    DataService.openshift_list_pods().then(response => {
      dispatch(fetchPodsDataSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchPodsDataError(error))
    })
  }
}
export function fetchAuditEventsByUser(){
  return dispatch => {
    dispatch(fetchAuditEventCountByUserRequest());
    DataService.audit_events_by_user().then(response => {
      dispatch(fetchAuditEventCountByUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchAuditEventCountByUserError(error))
    })
  }
}
export function fetchAuditUrisByUser(){
  return dispatch => {
    dispatch(fetchAuditUriCountByUserRequest());
    DataService.audit_routes_by_user().then(response => {
      dispatch(fetchAuditUriCountByUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchAuditUriCountByUserError(error))
    })
  }
}
export function fetchAllAudit(){
  return dispatch => {
    dispatch(fetchAllAuditRequest());
    DataService.all_audit_events().then(response => {
      dispatch(fetchAllAuditSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchAllAuditError(error))
    })
  }
}
