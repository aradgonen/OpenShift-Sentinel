#Split to stages, this is build stage
FROM python
WORKDIR /openshift-oc-applyer

COPY . /openshift-oc-applyer

RUN pip3 install -r requirements.txt

RUN curl -o oc.tar https://downloads-openshift-console.apps.projocp.cloudlet-dev.com/amd/linux/oc.tar --insecure
RUN tar xvf oc.tar

ENTRYPOINT ./oc login --token=$TOKEN --server=https://api.projocp.cloudlet-dev.com:6443 --insecure-skip-tls-verify=true

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0","--port=5002"]
#CMD [ "python3", "app.py", "--host=0.0.0.0" ]

#RUN python3 -m venv /opt/venv
#CMD ["/bin/sh"]