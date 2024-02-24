import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config/serverConfig.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token Not Found",
      });
    }

    const decode = jwt.verify(token, JWT_KEY);

    req.user = { userId: decode.userId };
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in auth middleware",
      error: error.message,
    });
  }
};
