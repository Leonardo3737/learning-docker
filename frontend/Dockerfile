FROM node:current-alpine3.20

WORKDIR /app

COPY package.json .
RUN yarn
COPY . .

CMD ["yarn", "dev"]

EXPOSE 3000