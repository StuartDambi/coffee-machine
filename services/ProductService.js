const db = require("../models");

const { Product } = db;

class ProductService {
  static async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleProduct(id) {
    try {
      const product = await Product.findOne({ id });
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(product) {
    try {
      const productToCreate = await Product.create(product);
      return productToCreate;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(id, product) {
    try {
      const productToUpdate = await Product.update(product, { where: { id } });
      return productToUpdate;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await Product.destroy({ where: { id } });
      return productToDelete;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
