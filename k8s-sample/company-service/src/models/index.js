
const Sequelize = require('sequelize');
/**
 * 
 * @param {string} connectionString 
 */
const loadDB = (connectionString)=>{

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

    const Company = db.import('./company');

    return db;
};

module.exports = {
    loadDB
}