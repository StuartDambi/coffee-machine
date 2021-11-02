"use strict";
import { Model } from "sequelize";

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    id!: number;
    name!: string;
    price!: number;
    description!: string;
    image!: string;
    stock!: number;
    category!: number;
    static associate(models: any) {
      // define association here
      Product.belongsTo(models.User);
      Product.belongsTo(models.Category);
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
