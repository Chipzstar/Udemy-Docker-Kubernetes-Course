FROM node:16.18.1

WORKDIR /

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev

