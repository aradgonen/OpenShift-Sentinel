DROP DATABASE IF EXISTS mydb;

-- Create the db
CREATE DATABASE mydb;

-- Move into the db
\c mydb

create sequence roles_id_seq;

alter sequence roles_id_seq owner to postgres;

create table roles
(
    id   integer default nextval('roles_id_seq'::regclass) not null
        primary key,
    name varchar(20)
);

INSERT INTO roles (name) VALUES('ROLE_USER');
INSERT INTO roles (name) VALUES('ROLE_MODERATOR');
INSERT INTO roles (name) VALUES('ROLE_ADMIN');