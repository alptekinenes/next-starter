FROM node:18.15.0-alpine3.17

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .eslintrc.json .prettierrc.json next.config.js tsconfig.json ./

COPY src ./src
COPY public ./public

RUN npm run build

CMD ["npm", "run", "start"]
