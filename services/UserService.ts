import db from "../models";

const { User } = db;

class UserService {
  static async getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
