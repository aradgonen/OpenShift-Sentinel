#Split to stages, this is build stage
FROM python
ARG OC_FILE_URL
WORKDIR /openshift-oc-applyer

COPY . .

RUN pip3 install -r requirements.txt

RUN curl -o oc.tar "$OC_FILE_URL" --insecure
RUN tar xvf oc.tar

ENTRYPOINT ./oc login --token=$TOKEN --server=https://api.projocp.cloudlet-dev.com:6443 --insecure-skip-tls-verify=true && python3 -m flask run --host=0.0.0.0 --port=5001

CMD [ "/bin/sh"]