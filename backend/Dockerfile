FROM node:current-alpine3.20

WORKDIR /app

COPY package.json .
RUN yarn
COPY . .

CMD ["yarn", "start"]

EXPOSE 5050