import data from "../models";
import { CategoryAttributes } from "../models/category";

const { Category } = data;

class CategoryService {
  static async getCategories() {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      throw error;
    }
  }

  static async getCategoryById(id: number) {
    try {
      const category = await Category.findOne({ id });
      return category;
    } catch (error) {
      throw error;
    }
  }

  static async getCategoryByName(name: string) {
    try {
      const category = await Category.findOne({ name });
      return category;
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(category: CategoryAttributes) {
    try {
      const categoryToBeCreated = await Category.create(category);
      return categoryToBeCreated;
    } catch (error) {
      throw error;
    }
  }

  static async updateCategory(id: number, category: CategoryAttributes) {
    try {
      const result = await Category.update(
        { ...category },
        { where: { id }, returning: true }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;
