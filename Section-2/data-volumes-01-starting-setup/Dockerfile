FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 80

ARG DEFAULT_PORT=8000

EXPOSE $PORT

VOLUME ["/app/node_modules", "/app/temp"]

CMD ["npm", "start"]