
const Sequelize = require('sequelize');
/**
 * 
 * @param {string} connectionString 
 */
const loadDB = (connectionString)=>{
    console.log( 'Load DB');
    const connOptions = Object.assign({
        dialect: 'postgres',
        pool: {
            maxConnections: 15,
            maxIdleTime: 20000,
            idle: 10000
        },
        define: {
            timestamps: false
        },
        logging: false,
        omitNull: true
    },  {});

    const db  = new Sequelize(
        connectionString,
        connOptions
    );
    console.log( 'Loaded Sequelize');
    const Company = db.import('./company');
    console.log( 'Loaded Models');
    return db;
};

module.exports = {
    loadDB
}