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

  static async getSingleProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = await ProductService.getSingleProduct(
        parseInt(req.params.id)
      );
      if (!product) {
        return res.status(404).json({
          status: res.statusCode,
          message: `product with id ${req.params.id} does not exist`,
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          data: product,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, description, image, stock, category } = req.body;
      const product = await ProductService.createProduct({
        name,
        price,
        description,
        image,
        category,
        stock,
      });
      if (!product) {
        return res.status(500).json({
          status: res.statusCode,
          message: "Some fields are missing",
        });
      } else {
        return res.status(201).json({
          status: res.statusCode,
          data: product,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: res.statusCode,
        message: "something went wrong",
        error,
      });
    }
  }
}

export default ProductController;
