#Split to stages, this is build stage
FROM python:3
ARG OC_FILE_URL
COPY . /openshift-oc-appyler
RUN curl -o oc.tar "$OC_FILE_URL" --insecure
RUN tar xvf oc.tar
RUN python3 -m venv /opt/venv
ENTRYPOINT ./oc login --token=$TOKEN --server=https://api.projocp.cloudlet-dev.com:6443 --insecure-skip-tls-verify=true && . /opt/venv/bin/activate && pip3 install -r /openshift-oc-appyler/requirements.txt && cd openshift-oc-appyler && python3 main.py
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0","--port=5001"]
