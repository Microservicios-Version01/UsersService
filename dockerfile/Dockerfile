FROM postgres:18-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    nano \
    curl \
    vim \
    postgresql-contrib-18

COPY ./postgresql.conf /etc/postgresql/postgresql.conf

COPY ./init.sql /docker-entrypoint-initdb.d/01-init.sql

RUN chmod 644 /etc/postgresql/postgresql.conf && \ 
    chmod 644 /docker-entrypoint-initdb.d/01-init.sql
    
    