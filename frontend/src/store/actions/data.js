import {fetchDataRequest,fetchDataSuccess,fetchDataError, fetchPodsDataSuccess,fetchPodsDataRequest,fetchPodsDataError} from "./data-actions";

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
