import { Request, Response, NextFunction } from "express";
// 0773290631 -- Buveera Kikuubo;

import CategoryService from "../services/CategoryService";

class CategoryController {
  static async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await CategoryService.getCategories();
      if (categories.length <= 0) {
        return res.status(200).json({
          status: res.statusCode,
          message: "no categories created yet",
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          data: categories,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const categoryExists = await CategoryService.getCategoryByName(name);
      if (categoryExists) {
        return res.status(409).json({
          status: res.statusCode,
          message: `category with name ${name} already exists`,
        });
      } else {
        const category = await CategoryService.createCategory({ name });
        return res.status(201).json({
          status: res.statusCode,
          data: category,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
