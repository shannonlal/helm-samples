console.log( 'Start Server Require');
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PERSON_PORT || 3008;
console.log( 'PORT ', PORT);
const DB_URL = process.env.DB_URL;
console.log('DB_URL', DB_URL);
const {loadDB} = require("./models");
const db = loadDB(DB_URL);
console.log( 'Loaded DB');
const apiPerson = require("./app/person");
const {loggerMiddleware} = require("./app/logger");


const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware);

apiPerson(app, db);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
