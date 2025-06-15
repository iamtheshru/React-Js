
// ✅ Updated router.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const accessKeyMiddleware = require("../middleware/accessKeyMiddleware");
const nodemailer = require("nodemailer");
const multer = require("multer");
const upload = multer();

const JWT_SECRET = "your_jwt_secret_key";

// All routes below use accessKeyMiddleware first
router.use(accessKeyMiddleware);

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: "error", message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(200).json({ status: "success", message: "User registered" });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error registering user" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ status: "error", message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ status: "error", message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: { token }
    });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Server error" });
  }
});

// PROFILE
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json({ status: "success", message: "Profile fetched", data: user });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error fetching profile" });
  }
});

// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ status: "error", message: "User not found" });

    const token = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vankarrahul2710@gmail.com",
        pass: "tveg sdjj xgvz mukk"
      },
      tls: { rejectUnauthorized: false }
    });

    const resetLink = `http://localhost:3000/reset-password/${token}`;
    await transporter.sendMail({
      from: '"Your App" <vankarrahul2710@gmail.com>',
      to: user.email,
      subject: "Password Reset Request",
      html: `<p>Hello ${user.name},</p><p>Click <a href='${resetLink}'>here</a> to reset your password.</p>`
    });

    return res.status(200).json({ status: "success", message: "Reset link sent to your email" });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error sending reset email" });
  }
});

// RESET PASSWORD
router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ status: "error", message: "Invalid or expired token" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return res.status(200).json({ status: "success", message: "Password has been reset" });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error resetting password" });
  }
});

// CREATE USER
router.post("/create", upload.none(), async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ status: "error", message: "User already exists" });

    const user = new User({ name, email, password: await bcrypt.hash(password, 10) });
    await user.save();
    return res.status(201).json({ status: "success", message: "User created successfully", data: user });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error creating user" });
  }
});

// GET ALL USERS
router.get("/list", authMiddleware, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json({ status: "success", message: "Users fetched", data: users });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error fetching users" });
  }
});

// UPDATE USER
router.put("/update/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { name, email }, { new: true }).select("-password");
    if (!user) return res.status(404).json({ status: "error", message: "User not found" });
    return res.status(200).json({ status: "success", message: "User updated", data: user });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error updating user" });
  }
});

// DELETE USER
router.delete("/delete/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ status: "error", message: "User not found" });
    return res.status(200).json({ status: "success", message: "User deleted" });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error deleting user" });
  }
});

// GET USER BY ID
router.get("/get/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ status: "error", message: "User not found" });
    return res.status(200).json({ status: "success", message: "User fetched", data: user });
  } catch (err) {
    return res.status(500).json({ status: "error", message: "Error fetching user" });
  }
});

module.exports = router;
