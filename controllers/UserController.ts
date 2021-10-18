import { Request, Response, NextFunction } from "express";

import UserService from "../services/UserService";

class UserController {
  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getUsers();
      if (users.length === 0) {
        return res.status(200).json({
          status: res.statusCode,
          message: "No users have been added",
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          data: users,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
