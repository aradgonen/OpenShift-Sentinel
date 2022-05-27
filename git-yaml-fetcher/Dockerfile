#Split to stages, this is build stage
FROM python
WORKDIR /git-yaml-fetcher

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0","--port=5002"]