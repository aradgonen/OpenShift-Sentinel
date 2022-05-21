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

const audit_all = () => {
  return axios.get(API_URL + "audit/log/all");
}
export default {
    openshift_list_namespaces,
    openshift_list_pods,
    openshift_delete_pod,
    audit_all
};
