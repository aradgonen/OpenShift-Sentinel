from flask import Flask, json
import requests

namespaces_url = "https://api.projocp.cloudlet-dev.com:6443/api/v1/namespaces"
pods_url = "https://api.projocp.cloudlet-dev.com:6443/api/v1/pods"

payload={}
headers = {
'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZ5NzBxYl9YbzBGdk85aDVwbkhoYXE2MmxpcHo0bmF0VkVpbXJTMUh3QjAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJvcGVuc2hpZnQtbG9nZ2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJjbHVzdGVyLWxvZ2dpbmctb3BlcmF0b3ItdG9rZW4tbWRuOGciLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiY2x1c3Rlci1sb2dnaW5nLW9wZXJhdG9yIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiNzZiMDA4ZGMtYWZjMC00NTRiLWIxZjEtNzgxMmUwYmJlNWM3Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Om9wZW5zaGlmdC1sb2dnaW5nOmNsdXN0ZXItbG9nZ2luZy1vcGVyYXRvciJ9.e2selPvruyCHaQTWz8YJuhv3Vq_jYipML5Vo5Lre4V0Pn3THJeWQK_r1ib2kiNJ_tAm1Jy-9a5buIlOG24nNjc7D8hrsl0Tvsf2Ur0c8-NF2zMlJOJXNQ6neOsVwt9kVUJd9V_vFX2w1A2S5H53vYe5Tv15BWQahv18NfnqBt_nd0svsvehPffeYST8Hgs7j6obnB2spqcFTe4Lk3YW2AFqasi4-Pe7aldvtiBODf4SpdfHEUshtrCjBNUFtGPsxyosyHoP2xJ_BoMfxj6WYbVe99OJp1yasnXgkDQy5IM5mXUad8Yh2RyaCcCbdi8N_Io6I54-JyMWelxY5CzZlcPq2h_K86skw5NPtkbiiuO8YfovDq8LWlC9-jvyPYYqoh_G70KIsN26xUAaLsV4g5SBokMmfMHd8qGeyxbkRjfMtTS7Otmn1zA3qnAmhAx7deIV38LvCQbvY8JW2hu3SGD2q1teXtqP8_NNyTLU0xf6eB7IUPkG0sZyRJg4RCb_Bna6t7dC4vxN3Ak_ftq-xHfXamE2cVBSQF3FVeIar8RpnQQg3ANvJXAdz6jwOfPo1NXMb9dvgTGkbEGQ4gIcYFSUZDgaP1hhZK06vP1pCJr4nj22m_lp2bPG9qgMafWTX6bwewYfQzjIzhe8ChTOYYa30fGJUpubJ3Y1YRZN8G5o'
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