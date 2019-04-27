'use strict';

console.log( 'Loading the env variables');
console.log( `ENV DB_URL ${process.env.DB_URL}`);
if( !process.env.DB_URL ){
    console.log( `Loading ENV DB_URL from PATH`);
    require('dotenv').config({ path: __dirname + '/../.env' });
}

console.log( `ENV DB_URL ${process.env.DB_URL} after`);
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