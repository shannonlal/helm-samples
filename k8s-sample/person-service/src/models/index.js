
const Sequelize = require('sequelize');
/**
 * 
 * @param {string} connectionString 
 */
const loadDB = (connectionString)=>{
    console.log( 'Starting loading DB');
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
    console.log( 'Created Sequelize');
    const Person = db.import('./person');
    console.log( 'Loaded Models');
    return db;
};

module.exports = {
    loadDB
}