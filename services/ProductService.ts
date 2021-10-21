import db from "../models";

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
}

export default ProductService;
