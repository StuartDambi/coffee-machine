const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const UserService = require("../services/UserService");
const { comparePasswords, hashPassword } = require("../utils/bcrypt");

dotenv.config();
class UserController {
  /**
   * Get users in the database
   * @param req Resquest
   * @param res Response Object
   * @param next Next Function
   * @returns List of users
   */
  static async getUsers(req, res, next) {
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
  /**
   *
   * @param req --User request from client
   * @param res -- Server response
   * @param next -- Next function
   * @returns -- Logged in user or error message
   */
  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const userExists = await UserService.findUserByEmail(email);
      if (!userExists) {
        return res.status(403).json({
          status: res.statusCode,
          message: `email ${email} does not exist, try signing up`,
        });
      } else {
        // check if passwords match
        const isPasswordRight = comparePasswords(password, userExists.password);
        if (!isPasswordRight) {
          return res.status(403).json({
            status: res.statusCode,
            message: "Wrong email or password, please try again",
          });
        } else {
          // create user session
          const user = {
            email: userExists.email,
            firstName: userExists.firstName,
            lastName: userExists.lastName,
            role: userExists.role,
          };
          const token = jwt.sign(user, "simplesecretkey", { expiresIn: "1hr" });
          if (!token) {
            return res.status(500).json({
              status: res.statusCode,
              message: "oops, could not generate user token",
            });
          } else {
            return res.status(200).json({
              status: res.statusCode,
              data: token,
            });
          }
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const { firstName, lastName, email, role, password } = req.body;
      const passHash = hashPassword(password);
      if (!passHash) {
        return res.status(500).json({
          status: res.statusCode,
          message: "could not hash password",
        });
      }
      const userToBeRegistered = await UserService.createUser({
        firstName,
        lastName,
        email,
        role,
        password: passHash,
      });
      if (userToBeRegistered) {
        const user = {
          firstName: userToBeRegistered.firstName,
          lastName: userToBeRegistered.lastName,
          email: userToBeRegistered.email,
          role: userToBeRegistered.role,
        };
        // TODO: store secret key in file
        const token = jwt.sign(user, "simplesecretkey", { expiresIn: "1hr" });
        if (token) {
          return res.status(201).json({
            status: res.statusCode,
            data: token,
          });
        } else {
          return res.status(500).json({
            status: res.statusCode,
            message: "oops, could not generate user token",
          });
        }
      } else {
        return res.status(500).json({
          status: res.statusCode,
          message: "something went wrong",
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
