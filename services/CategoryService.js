const data = require("../models");

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

  static async getCategoryById(id) {
    try {
      const category = await Category.findOne({ id });
      return category;
    } catch (error) {
      throw error;
    }
  }

  static async getCategoryByName(name) {
    try {
      const category = await Category.findOne({ name });
      return category;
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(category) {
    try {
      const categoryToBeCreated = await Category.create(category);
      return categoryToBeCreated;
    } catch (error) {
      throw error;
    }
  }

  static async updateCategory(id, category) {
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

module.exports = CategoryService;
