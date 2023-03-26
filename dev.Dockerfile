FROM node:18.15.0-alpine3.17

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .eslintrc.json .prettierrc.json next-env.d.ts next.config.js tsconfig.json ./

CMD ["npm", "run", "dev"]
