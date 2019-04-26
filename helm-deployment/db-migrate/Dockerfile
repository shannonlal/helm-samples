FROM node:8.9
# .npmrc is already in repository
#ARG NPMRC_TOKEN
# RUN echo $NPMRC_TOKEN > .npmrc

COPY . /db-migrate
WORKDIR db-migrate
RUN npm install --loglevel warn --no-optionals --ignore-scripts

ENTRYPOINT ["/usr/local/bin/npm", "run", "db:migrate"]
