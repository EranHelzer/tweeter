FROM node:14-alpine

WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --quiet
COPY . .

EXPOSE 8626
