from flask import Flask, json, request, jsonify
import requests
import re

base_url = "/api/images"
openshift_url = "https://api.projocp.cloudlet-dev.com:6443/api/v1/pods"

api = Flask(__name__)


@api.route(base_url + '/list', methods=['GET'])
def get_container_images():
    headers = {"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZ5NzBxYl9YbzBGdk85aDVwbkhoYXE2MmxpcHo0bmF0VkVpbXJTMUh3QjAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InJvLWFwaS10b2tlbi1zMnduZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJyby1hcGkiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJmZTE5NTVkMi04YTNkLTQxY2YtODBiYi1kNGUxYWFhODJiNWMiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6ZGVmYXVsdDpyby1hcGkifQ.ZyA97_xkfZWmyGO2Ss7_HCBd8osH2MeMZxxEnui7w5KJf1I77eSfJiNG7EPYJ5fZxPmQOVqDoikv0WobZazws9We_WoeCL7lA6zrik0L8DkCXdL9fRhI0AGyUlGmG79eUW8C0AZwkZoosRvK6U8kprEJBhwVRQuYKP80TTdXu1Vb4wEe4TX3ho-M6z8CgKyW1u3yLCft9Zd0jaf-svXFVhU7I3Bm9-vFrafIURlI_2JA-HhXIquRSxFkL28n0kzVWFQP9jqCAu_L7Xmryx78vm1s41lgza2hp-D_zkcNd3dJnlJIGxxSHoxInZuNHrqDGRKDKWMq3pQfWxlsExFlNEPYeMDyF66oQn2UcwzlzFfmC8mkF6Xw0aVjGT3zCXBxJPVZuxe9k01XOXJQ8ukH7NR7Cf-p_BuwAws-qKmZHBWjtHsgd4f2DhZFTT5hXlqD411dT_IOjWZvbMT1A0SVidkk6mW3GB0rsoQpUClvuL_u1eekKKEB-SMFWl2Jce7nqiRd_0Aash5_nStEG9zqr2NsA9U7deMWuV_5_SmtCdzd7J9dmFJhFAqFQrU3bnsI5Hqv_yBSzVGDAGr7YmXzKneFpDoTOix4KjCQ0-gUzV8mPcH3yYeH-gIPFCWGK60ZIhCMXPPmpr_l9dsVjZSc3EmfcKOHTO8LcaF1W-vSILk"}
    pods_details = requests.get(openshift_url, verify=False,  headers=headers)
    pods_dict = pods_details.json()
    #print(pods_dict)

    result = []
    single_container_result = {}

    for container_item in pods_dict['items']:
        for container in container_item['spec']['containers']:

            single_container_result = {}

            image_match = re.search("^docker\.io", container['image'])

            # is a container from image in docker.io
            if image_match:
                [image_program, version] = container['image'].split("/")[1].split(':')

                single_container_result['image'] = container['image']
                single_container_result['name'] = container['name']
                single_container_result['namespace'] = container_item['metadata']['namespace']
                single_container_result['owner'] = container_item['metadata']['ownerReferences'][0]['kind']
                single_container_result['program'] = image_program
                single_container_result['version'] = version
                single_container_result['registry'] = 'docker.io'

                result.append(single_container_result)

    return jsonify(result)


if __name__ == '__main__':
    api.run(port=5004)
    #get_container_images()
