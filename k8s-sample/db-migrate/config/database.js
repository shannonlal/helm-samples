'use strict';

console.log( 'Loading the env variables')
if( !process.env.DB_URL ){
    require('dotenv').config({ path: __dirname + '../.env' });
}

module.exports = {
    development: {
        use_env_variable: "DB_URL"
    },
    test: {
        use_env_variable: "DB_URL"
    },
    production: {
        use_env_variable: "DB_URL"
    }
};