FROM node:14-alpine

WORKDIR /var/www/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000
