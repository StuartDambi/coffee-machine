'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderLine.belongsTo(models.Sale);
    }
  };
  OrderLine.init(
    {
      product: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      totalPrice: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "OrderLine",
    }
  );
  return OrderLine;
};