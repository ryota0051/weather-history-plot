FROM node:18.14.2-slim

WORKDIR /app

COPY ./package.json ./yarn.lock /app/

RUN yarn install

CMD [ "yarn", "start" ]
