from flask import Flask, json
import requests
import os
namespaces_url = "https://api.projocp.cloudlet-dev.com:6443/api/v1/namespaces"
pods_url = "https://api.projocp.cloudlet-dev.com:6443/api/v1/pods"

payload={}
headers = {
'Authorization': 'Bearer ' + os.environ.get("OPENSHIFT_TOKEN")
}
api = Flask(__name__)

@api.route('/api/openshift/namespaces', methods=['GET'])
def get_openshift_namespaces():
  return requests.request("GET", namespaces_url, headers=headers, data=payload, verify=False).json()

@api.route('/api/openshift/pods', methods=['GET'])
def get_openshift_pods():
  return requests.request("GET", pods_url, headers=headers, data=payload, verify=False).json()

@api.route('/api/openshift/pods/<namespace>/<pod>', methods=['DELETE'])
def delete_pod_by_namespace(namespace,pod):
    return requests.request("DELETE",namespaces_url+"/"+namespace+"/pods/"+pod, headers=headers, data=payload, verify=False).json()
if __name__ == '__main__':
    api.run()