FROM node:latest

WORKDIR /app

COPY _src/package*.json ./

RUN npm install

COPY _src .

RUN npm run webpack-build

EXPOSE 8080

CMD ["npx", "@11ty/eleventy", "--quiet", "--port=8080"]