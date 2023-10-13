# Node.js 버전을 지정합니다.
FROM node:18

RUN NODE_OPTIONS=--max_old_space_size=4096

# 컨테이너 내부의 작업 디렉토리를 설정합니다.
WORKDIR /app

COPY . /app

# 필요한 모듈을 설치합니다.
RUN yarn install

# 프로덕션용 빌드를 실행합니다.
RUN yarn build

# 포트를 노출합니다. Next.js 앱은 기본적으로 3000 포트를 사용합니다.
EXPOSE 3000

# 앱을 실행합니다.
CMD ["yarn", "start"]
