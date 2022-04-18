FROM node:alpine:latest
WORKDIR /app
COPY ./frontend/ ./
RUN npm i
CMD ["npm", "start"]