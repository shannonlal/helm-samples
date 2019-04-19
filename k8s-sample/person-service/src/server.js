const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PERSON_PORT || 3008;
const DB_URL = process.env.DB_URL;
const {loadDB} = require("./models");
const db = loadDB(DB_URL);
const apiPerson = require("./app/person");


const app = express();
app.use(bodyParser.json());

apiPerson(app, db);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
