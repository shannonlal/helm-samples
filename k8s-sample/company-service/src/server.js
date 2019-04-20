console.log( 'Server Loading');
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.COMPANY_PORT || 3009;
const DB_URL = process.env.DB_URL;
console.log('DB_URL', DB_URL);
const {loadDB} = require("./models");
const db = loadDB(DB_URL);
console.log( 'DB Started');
const apiCompany = require("./app/company");
const {loggerMiddleware} = require("./app/logger");


const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware);

apiCompany(app, db);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
