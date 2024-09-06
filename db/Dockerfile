FROM mysql:9.0.1-oracle

ENV MYSQL_ROOT_PASSWORD=030131

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306