FROM python:3
COPY . /openshift-audit-todb
RUN curl -o oc.tar https://downloads-openshift-console.apps.projocp.cloudlet-dev.com/arm64/linux/oc.tar --insecure
RUN tar xvf oc.tar
RUN python3 -m venv /opt/venv
ENTRYPOINT ./oc login --token=$TOKEN --server=https://api.projocp.cloudlet-dev.com:6443 --insecure-skip-tls-verify=true && ./oc version && ./oc adm node-logs --role=master --path=openshift-apiserver/audit.log >> audit.log && . /opt/venv/bin/activate && pip3 install -r /openshift-audit-todb/requirements.txt && cd openshift-audit-todb && python3 main.py
CMD ["/bin/sh"]