FROM node:alpine
WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install nodemon -g

COPY . .
CMD ["nodemon","index.js"]