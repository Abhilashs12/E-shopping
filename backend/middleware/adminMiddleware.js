const admin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    if (req.user.role !== "Admin") {
      return res.status(403).json({
        message: "Admin access only",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default admin;
