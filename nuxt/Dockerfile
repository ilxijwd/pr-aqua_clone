FROM node:10-alpine

ARG BASE_URL
ENV BASE_URL ${BASE_URL}
ARG STRAPI_URL
ENV STRAPI_URL ${STRAPI_URL}

RUN mkdir -p /usr/nuxt
WORKDIR /usr/nuxt

COPY package.json /usr/nuxt
RUN npm install

COPY . /usr/nuxt
RUN npm run build
# RUN npm run generate

CMD ["npm", "run", "start"]