FROM node:lts-bullseye-slim

RUN apt-get update --silent \
&&  apt-get install -yqq --no-install-suggests --no-install-recommends --silent \
      curl \
      jq \
      less

# USER node:node

ENV PATH /home/node/.local/bin:$PATH
ENV NODE_ENV=development

WORKDIR /app

RUN mkdir -p /home/node/.local/bin \
             node_modules/.cache/.eslintcache

RUN npm config set prefix '/home/node/.local'

RUN npm install -g \
      react \
      react-scripts

COPY package*.json ./
RUN npm install -g

# # Uncomment in production-like mode
# COPY . .

VOLUME /home/node/.npm/_logs/

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["npm", "start", "--loglevel", "verbose"]
