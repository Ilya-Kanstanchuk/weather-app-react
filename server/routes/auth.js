import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import middleware from "../middleware/middleware.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "User was added successfully" });
  } catch (error) {
    return res.status(500).json({ succes: false, message: "Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not exists" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect for this user",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    return res.status(200).json({
      success: true,
      token,
      user: { name: user.name, id: user._id },
      message: "Login was successfull",
    });
  } catch (error) {
    return res.status(500).json({ succes: false, message: "Error" });
  }
});

router.get("/verify", middleware, async (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
});

export default router;
