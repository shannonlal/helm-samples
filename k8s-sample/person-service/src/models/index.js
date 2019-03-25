
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
        logging: false
    },  {});

    const db  = new Sequelize(
        connectionString,
        connOptions
    );

    const Person = db.import('./person');

    return db;
};

module.exports = {
    loadDB
}