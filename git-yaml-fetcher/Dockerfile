#Split to stages, this is build stage
FROM python
WORKDIR /git-yaml-fetcher

COPY . .
#COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt



CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0","--port=5002"]
#CMD [ "python3", "app.py", "--host=0.0.0.0" ]