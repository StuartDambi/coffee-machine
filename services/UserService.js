const db = require("../models");

const { User } = db;

class UserService {
  /**
   * Return List of Users
   * @returns list of users
   */
  static async getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Finds users by email
   * @param email User Email
   * @returns user
   */
  static async findUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return null;
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Register a new user
   * @param user @interface UserAttributes
   * @returns user created after signup
   */
  
  static async registerUser(user) {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(user) {
    try {
      const updatedUser = await User.update(user, {
        where: { id: user.id }
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const deletedUser = await User.destroy({
        where: { id }
      });
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }

  static async getCustomers() {
    try {
      const customers = await User.findAll({ where: { role: "customer" } });
      return customers;
    } catch (error) {
      throw error;
    }
  }

  
}

module.exports = UserService;
