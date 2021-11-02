const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const payload = await jwt.verify(token, "simplesecretkey");
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

module.exports = verifyToken;
