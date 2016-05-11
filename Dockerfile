FROM node:4.4.3

ENV SOURCE_DIR /usr/src
RUN mkdir -p $SOURCE_DIR && cd $SOURCE_DIR
WORKDIR $SOURCE_DIR

ENV NODE_ENV production
ENV DEBUG app:*

COPY package.json $SOURCE_DIR/

RUN npm install --production

COPY dist $SOURCE_DIR/dist

COPY server/networks $SOURCE_DIR/networks
COPY server-es5 $SOURCE_DIR

EXPOSE 3000

CMD ["node", "main.js"]
