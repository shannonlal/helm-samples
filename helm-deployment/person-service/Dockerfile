FROM node:8.9
# .npmrc is already in repository
#ARG NPMRC_TOKEN

EXPOSE 80

RUN npm install --loglevel warn -g typings
RUN npm install --loglevel warn -g typings-global
RUN npm install --loglevel warn -g pm2
RUN pm2 set pm2-logrotate:max_size 10M

COPY . /person-service
WORKDIR person-service
# RUN echo $NPMRC_TOKEN > .npmrc
RUN npm install --loglevel warn --no-optionals --ignore-scripts
ENV PERSON_PORT 80
ENTRYPOINT [ "/usr/local/bin/pm2-docker" ]
CMD ["start", "src/server.js"]