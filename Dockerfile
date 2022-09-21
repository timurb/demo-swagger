FROM node:alpine
RUN npm install -g nodemon

WORKDIR /app
COPY package.json .
RUN npm install

COPY . /app

EXPOSE 5100
