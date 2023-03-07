FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

VOLUME ["/app/node_modules"]

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

ENV DB_HOST mongodb

ENV DB_USERNAME admin

ENV DB_PASSWORD admin

CMD ["npm", "start"]