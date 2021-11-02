import db from "../models";
import { ProductAttributes } from "../models/product";

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

  static async getSingleProduct(id: number) {
    try {
      const product = await Product.findOne({ id });
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(product: ProductAttributes) {
    try {
      const productToCreate = await Product.create(product);
      return productToCreate;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
