'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sale.belongsTo(models.User);
      Sale.hasMany(models.OrderLine);
    }
  };
  Sale.init(
    {
      description: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      paymentMethod: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Sale",
    }
  );
  return Sale;
};