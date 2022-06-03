import os
import sys
import shlex, subprocess
from flask import Flask, json
import requests

openshift_server = 'https://api.projocp.cloudlet-dev.com:6443'
token = 'sha256~jrctwjUyj6FMo-4VqQqCeFEJO7bfQLQGzeoLgHVWYKU'
login = 'oc login --username=kubeadmin --password=ZYeI4-oyVps-AJdHb-EwuxV --server=' + openshift_server
logout = 'oc logout'
policy_path = './rhacm-policies.yaml'
deploy_policy = './oc apply -f ' + policy_path
api = Flask(__name__)


@api.route('/api/deploy', methods=['GET'])
def deploy():
    changed = []
    unchanged = []
    failed = []

    # os.system(login)
    os.system("./oc status")
    # out_logs = os.system(deploy_policy)
    arch = subprocess.check_output(deploy_policy, shell=True).decode(sys.stdout.encoding)
    #os.system(logout)

    output = arch.split('\n')
    for line in output:
        policy_target = line.split(' ')[0]
        if line.__contains__('changed') and not line.__contains__('unchanged'):
            changed.append(policy_target)
        if line.__contains__('unchanged'):
            unchanged.append(policy_target)
        if line.__contains__('failed'):
            failed.append(policy_target)

    return {'changed': changed, 'unchanged': unchanged, 'failed': failed}


if __name__ == '__main__':
    api.run(port=5001)
