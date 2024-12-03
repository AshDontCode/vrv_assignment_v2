const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();



    
// Register
router.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;
    const user = new User({ firstname, lastname, email, password, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ firstname: user.firstname, id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, role: user.role, firstname:user.firstname });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected Route (example)
router.get("/protected", protect, authorize("Admin"), (req, res) => {
  res.json({
    message:`Hi ${req.user.role}`
  });
});



router.get("/profile", protect, (req, res) => {
  res.json({
    id: req.user.id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
    role: req.user.role,
  });
});



router.get("/users", protect, authorize("Admin", "Moderator"), async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude passwords from results
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
