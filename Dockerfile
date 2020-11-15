FROM node:14-alpine

WORKDIR /usr
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
WORKDIR /usr/app
COPY . .

EXPOSE 8626
