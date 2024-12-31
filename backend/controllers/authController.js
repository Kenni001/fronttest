import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Member from "../models/member.js";

export const registerUser = async (req, res) => {
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
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
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
    });

    const savedUser = await newUser.save();

    const newMember = new Member({
      firstName: savedUser.firstName,
      middleName: savedUser.middleName,
      lastName: savedUser.lastName,
      maidenName: savedUser.maidenName,
      email: savedUser.email,
      phone: savedUser.phone,
      address: savedUser.address,
      city: savedUser.city,
      state: savedUser.state,
      membershipStatus: "active",
      membershipStartDate: new Date(),
      membershipExpiryDate: null,
    });

    await newMember.save();

    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    res.status(201).json({ token, user: savedUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong during registration." });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      maidenName,
      phone,
      address,
      city,
      state,
    } = req.body;

    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }

    if (!firstName || !lastName) {
      return res
        .status(400)
        .json({ message: "First name and last name are required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        middleName,
        lastName,
        maidenName,
        phone,
        address,
        city,
        state,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update profile" });
  }
};

export default { updateProfile, registerUser };
