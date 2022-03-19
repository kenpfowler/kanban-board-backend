FROM node:16-alpine
EXPOSE 8888

RUN mkdir /opt/app
WORKDIR /opt/app

COPY package-lock.json package-lock.json
COPY package.json package.json

RUN NODE_ENV=production npm install

COPY dist dist

CMD node dist/index.js 
