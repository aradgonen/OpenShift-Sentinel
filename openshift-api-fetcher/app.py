from flask import Flask, json
import requests
import os
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["mydatabase"]
mycol = mydb["audit"]
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

@api.route('/api/mongodb/audit/log/all', methods=['GET'])
def get_audit_logs_all():
    data = []
    # for document in mycol.find():
    #     print(str(document))
    #     data.append(str(document))
    users = get_audit_users()
    for user in users:
        for document in mycol.find({"user.username":user}):
            data.append(document)
    return str(data)

def get_audit_users():
    data = []
    for document in mycol.distinct("user.username"):
        print(str(document))
        data.append(str(document))
    return list(filter(lambda k: 'system' not in k, data))
if __name__ == '__main__':
    api.run(port=5000)