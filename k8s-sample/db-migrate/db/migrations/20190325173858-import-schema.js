'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let importSchema = fs.readFileSync(path.join(__dirname, '../schema.sql'), {encoding: 'utf8'});
    return queryInterface.sequelize.query(importSchema, {raw: true});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
