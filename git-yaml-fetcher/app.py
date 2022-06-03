from flask import Flask, json, request
import requests

git_user = "openshift-4-compliance"
git_repo = "openshift-4-compliance-automation"
git_branch = "master"
git_repo_url = "https://raw.githubusercontent.com/{}/{}/{}".format(git_user, git_repo, git_branch)
git_tree_url = "https://api.github.com/repos/{}/{}/git/trees/{}?recursive=1".format(git_user, git_repo, git_branch)
base_url = "/api"
api = Flask(__name__)



class remote_files:
  def __init__(self):
    self.files = {}


remote_files_obj = remote_files()

@api.route(base_url + '/yaml/all', methods=['GET'])
def git_yaml_files():
    if not bool(remote_files_obj.files):
        tree = requests.get(git_tree_url)
        if tree.status_code == 200:
            files_res = []
            files = tree.json()['tree']
            for file in files:
                if file['path'].endswith('.yaml'):
                    file_array = file['path'].split('/')
                    file_name = file_array[len(file_array) - 1]
                    files_res.append({"file": file_name, "path": file['path'], "repo": git_repo})
            remote_files_obj.files = files_res

    return {'yaml-files': remote_files_obj.files}
    #return tree


@api.route(base_url + '/yaml/', methods=['GET'])
def git_yaml_file():
    args_file = request.args.get("file")
    if args_file != '':
        print("****" + args_file)
        file = requests.get(git_repo_url + '/' + args_file)
        return {'file': args_file, 'content': file.content.decode('utf-8')}
    return "bad request", 400


if __name__ == '__main__':
    api.run(port=5002)
