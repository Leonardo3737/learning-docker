FROM node:current-alpine3.20

WORKDIR /app

COPY package.json .
RUN yarn
COPY . .

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

CMD ["entrypoint.sh"]

EXPOSE 5050