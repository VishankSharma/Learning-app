import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // 10 attempts
  skip: (req) => req.method === "OPTIONS",
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Too many login attempts. Account temporarily locked."
    });
  }
});
