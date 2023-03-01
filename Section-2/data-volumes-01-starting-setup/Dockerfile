FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=8000

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

VOLUME ["/app/node_modules", "/app/temp"]

CMD ["npm", "start"]