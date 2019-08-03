FROM node:10.16.0-buster-slim

WORKDIR /front-end

ADD package* .

RUN npm install

ADD . .

ENTRYPOINT [ "npm", "start" ]

