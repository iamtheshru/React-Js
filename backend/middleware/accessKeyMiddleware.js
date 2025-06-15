// ✅ accessKeyMiddleware.js
const REQUIRED_ACCESS_KEY = process.env.ACCESS_KEY || "your_access_key";

const accessKeyMiddleware = (req, res, next) => {
const accessKey = req.headers['accesskey']; // ✅ CORRECT (header keys are case-insensitive but lowercase preferred)

  if (!accessKey || accessKey !== REQUIRED_ACCESS_KEY) {
    return res.status(401).json({
      status: "error",
      message: "Please set access key"
    });
  }

  next();
};

module.exports = accessKeyMiddleware;