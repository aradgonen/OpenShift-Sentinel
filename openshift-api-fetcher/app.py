from flask import Flask, json
import requests
import os
import pymongo

myclient = pymongo.MongoClient("mongodb://"+os.environ.get("MONGODB_URL")+":27017/")
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

@api.route('/api/mongodb/audit/log/countbyusername', methods=['GET'])
def get_audit_logs_count_by_user():
    audit_dict = {}
    data = []
    # for document in mycol.find():
    #     print(str(document))
    #     data.append(str(document))
    users = get_audit_users()
    for user in users:
        for document in mycol.find({"user.username":user}):
            data.append(document)
            if user in audit_dict:
                audit_dict[user] += 1
            else:
                audit_dict[user] = 1
    return audit_dict
@api.route('/api/mongodb/audit/log/uris', methods=['GET'])
def get_audit_logs_uris():
    return get_audit_uris()
def get_audit_users():
    data = []
    for document in mycol.distinct("user.username"):
        print(str(document))
        data.append(str(document))
    return list(filter(lambda k: 'system' not in k, data))
def get_audit_uris():
    data = []
    for document in mycol.distinct("requestURI"):
        print(str(document))
        data.append(str(document))
    filterd_data = list(filter(lambda k: '=' not in k, data))
    return get_audit_uris_count_by_user(list(filter(lambda k: ':' not in k, filterd_data)))
def get_audit_uris_count_by_user(uris):
    uris_dict = {}
    for uri in uris:
        for document in mycol.find({'requestURI':uri}):
            if ':' not in document.get('user').get('username'):
                if document.get('user').get('username') not in uris_dict.keys():
                    uris_dict[document.get('user').get('username')] = {}
                    uris_dict[document.get('user').get('username')][document.get('requestURI').split('/')[-2] + document.get('requestURI').split('/')[-1]] = 1
                else:
                    if (document.get('requestURI').split('/')[-2] + document.get('requestURI').split('/')[-1]) not in uris_dict[document.get('user').get('username')].keys():
                        uris_dict[document.get('user').get('username')][document.get('requestURI').split('/')[-2] + document.get('requestURI').split('/')[-1]] = 1
                    else:
                        uris_dict[document.get('user').get('username')][document.get('requestURI').split('/')[-2] + document.get('requestURI').split('/')[-1]] += 1
    return uris_dict
if __name__ == '__main__':
    api.run(port=5000)