from flask import Flask, json, request
import requests

git_user = "openshift-4-compliance"
git_repo = "openshift-4-compliance-automation"
git_branch = "master"
git_repo_url = "https://raw.githubusercontent.com/{}/{}/{}".format(git_user, git_repo, git_branch)
git_tree_url = "https://api.github.com/repos/{}/{}/git/trees/{}?recursive=1".format(git_user, git_repo, git_branch)

api = Flask(__name__)


@api.route('/api/yaml/all', methods=['GET'])
def git_yaml_files():
    tree = requests.get(git_tree_url)
    if tree.status_code == 200:
        files_res = []
        files = tree.json()['tree']
        for file in files:
            if file['path'].endswith('.yaml'):
                file_array = file['path'].split('/')
                file_name = file_array[len(file_array) - 1]
                files_res.append({"file": file_name, "path": file['path']})
        return {'yaml-files': files_res}
    return tree


@api.route('/api/yaml/', methods=['POST'])
def git_yaml_file():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        json = request.json
        if 'filepath' in request.json:
            filepath = json['filepath']
            file = requests.get(git_repo_url + '/' + filepath)
            print()
            return {'file': filepath, 'content': file.content.decode('utf-8')}
    return ''''''


if __name__ == '__main__':
    api.run(port=5002)
