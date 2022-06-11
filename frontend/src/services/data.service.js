import axios from "axios";

const API_URL = "http://localhost:8080/api/proxy/";

const openshift_list_namespaces = () => {
  return axios.get(API_URL + "openshift/soar/namespaces");
};

const openshift_list_pods = () => {
    return axios.get(API_URL + "openshift/soar/pods");
  };
const openshift_delete_pod = (namespace,pod) => {
    return axios.delete(API_URL + "openshift/soar/pods/"+namespace+"/"+pod);
}

const audit_events_by_user = () => {
  return axios.get(API_URL + "audit/log/countbyusername");
}
const audit_routes_by_user = () => {
  return axios.get(API_URL + "audit/log/uris");
}

export default {
    openshift_list_namespaces,
    openshift_list_pods,
    openshift_delete_pod,
    audit_events_by_user,
    audit_routes_by_user
};
