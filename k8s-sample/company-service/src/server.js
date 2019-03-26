const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.COMPANY_PORT;
const DB_URL = process.env.DB_URL;
const {loadDB} = require("./models");
const db = loadDB(DB_URL);
const apiCompany = require("./app/company");


const app = express();
app.use(bodyParser.json());

apiCompany(app, db);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
