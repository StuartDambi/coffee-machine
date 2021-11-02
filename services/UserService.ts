import db from "../models";
import { UserAttributes } from "../utils/interfaces";

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
  static async findUserByEmail(email: string) {
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
  static async createUser(user: UserAttributes) {
    try {
      const userToBeSaved = await User.findOne({
        where: { email: user.email },
      });
      if (userToBeSaved) {
        return "User already exists";
      }
      const createdUser = await User.create(user);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
