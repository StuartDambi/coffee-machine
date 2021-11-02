"use strict";
import { Model } from "sequelize";

export interface CategoryAttributes {
  id?: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Category
    extends Model<CategoryAttributes>
    implements CategoryAttributes
  {
    id!: number;
    name!: string;
    static associate(models: any) {
      // define association here
      Category.hasMany(models.Product);
    }
  }
  Category.init(
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
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
