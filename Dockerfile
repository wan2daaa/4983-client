# Node.js 버전을 지정합니다.
FROM node:18

RUN NODE_OPTIONS=--max_old_space_size=4096

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
