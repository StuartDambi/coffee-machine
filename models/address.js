'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User);
      Address.hasMany(models.Order);
    }
  };
  Address.init(
    {
      country: { type: DataTypes.STRING, allowNull: false },
      town: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      otherNotes: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};