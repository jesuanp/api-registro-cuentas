const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('account', {
        
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cobrada: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        banned: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
      }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      });
}
