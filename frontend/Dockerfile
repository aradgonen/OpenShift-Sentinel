FROM node:latest AS build
COPY ./ ./
RUN npm install --production
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
