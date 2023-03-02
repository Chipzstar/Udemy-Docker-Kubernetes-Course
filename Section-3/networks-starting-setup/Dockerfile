FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=3000

ENV PORT $DEFAULT_PORT

VOLUME ["/app/node_modules"]

CMD ["node", "app.js"]