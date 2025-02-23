import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import authController from "../controllers/authController.js";
import dotenv from "dotenv";
import Member from "../models/member.js";
import Membership from "../models/Membership.js";

dotenv.config();

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/register", upload.single("profilePhoto"), async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      maidenName,
      email,
      password,
      username,
      phone,
      address,
      city,
      state,
      membershipType,
    } = req.body;

    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingEmail) {
      return res.status(400).json({ error: "Email already in use." });
    }
    if (existingUsername) {
      return res.status(400).json({ error: "Username already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      middleName,
      lastName,
      maidenName,
      email,
      password: hashedPassword,
      username,
      phone,
      address,
      city,
      state,
      membershipType,
      profilePhoto: req.file ? req.file.path : "",
    });

    await user.save();

    const newMember = new Member({
      firstName,
      middleName,
      lastName,
      maidenName,
      email,
      phone,
      address,
      city,
      state,
      membershipStatus: "inactive",
    });

    await newMember.save();

    const newMembership = new Membership({
      plannerId: user.plannerId,
      expiryDate: new Date("2024-12-31"),
      membershipCategory: "Type I",
    });

    await newMembership.save();

    res
      .status(201)
      .json({ message: "User and Member registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

router.put("/profile", authenticate, authController.updateProfile);

export default router;
