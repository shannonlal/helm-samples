'use strict';
const winston = require('winston');
const MICRO_SERVICE_NAME = 'COMPANY';
const pjson = require('../../package.json');

let transports = [
    new (winston.transports.Console)({
        timestamp: true,
        handleExceptions: true
    })
];

if (process.env.SENTRY_DSN || false) {
    const Sentry = require('winston-raven-sentry');

    const sentryOptions = {
        dsn: process.env.SENTRY_DSN,
        level: 'error',
        install: true,
        config: {
            captureUnhandledRejections: true,
            tags:{
                MICRO_SERVICE:MICRO_SERVICE_NAME,
                MICRO_SERVICE_VERSION: pjson.version
            }
        }
    };
    transports.push(new Sentry(sentryOptions));
}

if (process.env.GRAYLOG2 || false) {
    const GelfTransport = require('winston-gelf');
    const options = {
        gelfPro: {
          fields: {
            facility: MICRO_SERVICE_NAME,
            microServiceVersion: pjson.version
            //
          },
          adapterName: 'udp', // optional; currently supported "udp", "tcp" and "tcp-tls"; default: udp
          adapterOptions: { // this object is passed to the adapter.connect() method        
            host: process.env.GRAYLOG2, // optional; default: 127.0.0.1
            port: 12201, // optional; default: 12201
          }
        }
    };
    transports.push( new GelfTransport(options));
}

winston.configure({
    transports: transports
});