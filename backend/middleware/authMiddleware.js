const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

exports.authorize = (...roles) => (req, res, next) => {
  console.log(req.user)
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: `Hi ${req.user.firstname} : Only Admin have permission` });
  }
  next();
};
