FROM node:20-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache bash
RUN npm install --omit=dev
CMD ["node", "./bin/www"]
EXPOSE 3000