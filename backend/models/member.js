import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    maidenName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    membershipStatus: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "inactive",
    },
    membershipStartDate: { type: Date },
    membershipExpiryDate: { type: Date },
    membershipType: {
      type: String,
      enum: ["I", "II", "III"],
      default: "I",
    },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", MemberSchema);

export default Member;
