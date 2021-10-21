import { NextFunction, Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
  static async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductService.getAllProducts();
      if (products.length <= 0) {
        return res.status(200).json({
          status: res.statusCode,
          message: "oops, no products added yet",
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          data: products,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
