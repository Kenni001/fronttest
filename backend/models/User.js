import mongoose from "mongoose";

function generatePlannerId() {
  return "planner-" + Math.random().toString(36).substr(2, 9);
}

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    maidenName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    profilePhoto: { type: String },
    membershipType: {
      type: String,
      enum: ["I", "II", "III"],
      default: "I",
    },
    membershipStatus: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "inactive",
    },
    uploadedDocuments: { type: [String] },
    plannerId: {
      type: String,
      required: true,
      unique: true,
      default: generatePlannerId,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
