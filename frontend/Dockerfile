FROM node:22

WORKDIR /app

COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN npm install

COPY ./public /app/
COPY ./src /app

CMD ["npm", "start"]