'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Check if the schema already exists by verifying that the table 'default_initial_settings' exists. If schema does not exist, create it otherwise skip it.
    let tableExistsQuery = `SELECT * FROM information_schema.tables WHERE table_name = 'default_initial_settings';`;
    return queryInterface.sequelize.query(tableExistsQuery, {type: Sequelize.QueryTypes.SELECT}).then((tables) => {
      if (tables.length > 0) {
        // skip the import-schema migration
        let skipSchemaImport = `INSERT INTO "SequelizeMeta" (name) VALUES ('20190325173858-import-schema.js');`;
        return queryInterface.sequelize.query(skipSchemaImport, {type: Sequelize.QueryTypes.INSERT});
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    let revertQuery = `DELETE FROM "SequelizeMeta" WHERE name = '20190325173858-import-schema.js';`;
    return queryInterface.sequelize.query(revertQuery, {type: Sequelize.QueryTypes.DELETE});
  }
};
