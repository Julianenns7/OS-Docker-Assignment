
FROM node:latest

WORKDIR /osdocker2

COPY package*.json ./
RUN npm install

COPY books.json ./
COPY controllers.js ./
COPY package-lock.json ./
COPY routes.js ./
COPY server.js ./

EXPOSE 8080

CMD ["npm", "run", "dev"]