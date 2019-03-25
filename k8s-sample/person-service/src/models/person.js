module.exports = (sequelize, DataTypes) => {
    return sequelize.define('person', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        last_name:{
            type: DataTypes.STRING,
            allowNull: false
        }
      },
      {
        tableName: 'person'
      }
    );

  }
