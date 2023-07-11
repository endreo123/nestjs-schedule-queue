FROM node:18.16.1-alpine

RUN NODE_OPTIONS="--dns-result-order=ipv4first" npm install -g @nestjs/cli@10.1.7

WORKDIR /home/node/app

COPY . /home/node/app/

RUN NODE_OPTIONS="--dns-result-order=ipv4first" npm i
