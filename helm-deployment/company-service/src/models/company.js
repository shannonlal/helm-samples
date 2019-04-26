module.exports = (sequelize, DataTypes) => {
    return sequelize.define('company', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        description:{
            type: DataTypes.STRING,
            allowNull: false
        }
      },
      {
        tableName: 'company'
      }
    );

  }
