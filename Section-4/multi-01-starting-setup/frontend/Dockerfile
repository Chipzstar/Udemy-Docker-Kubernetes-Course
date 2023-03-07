FROM node

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

VOLUME ["/app/node_modules"]

EXPOSE 3000

CMD ["npm", "start"]

