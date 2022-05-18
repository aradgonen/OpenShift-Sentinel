FROM postgres:latest as db
WORKDIR /app
ADD init.sh /docker-entrypoint-initdb.d
ADD dump.sql ./scripts/db/dump.sql