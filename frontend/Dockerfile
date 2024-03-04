FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install -g npm@9.8.1
COPY . .
CMD ["npm","start"]