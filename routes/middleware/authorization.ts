import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export interface Payload {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  iat: number;
  exp: number;
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string | undefined = req.headers.authorization?.split(" ")[1];
    const payload = await jwt.verify(token as string, "simplesecretkey");
    if (payload) {
      next();
    } else {
      return res.status(403).json({
        status: res.statusCode,
        message: "Authorization denied",
      });
    }
  } catch (error) {
    return res.status(403).json({
      status: res.statusCode,
      message: "invalid or expired token",
    });
  }
};

export default verifyToken;
