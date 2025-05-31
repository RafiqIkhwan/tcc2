FROM node:18-alpine

WORKDIR /frontend/

COPY package.json package-lock.json ./
COPY public/ ./public
COPY src/ ./src

RUN npm install --legacy-peer-deps

CMD ["npm", "start"]