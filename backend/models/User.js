import mongoose from 'mongoose';

// Define the generatePlannerId function
function generatePlannerId() {
  return 'planner-' + Math.random().toString(36).substr(2, 9); // Example random ID generator
}

// Define the User schema
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String }, // New field for Middle Name
  lastName: { type: String, required: true },
  maidenName: { type: String }, // New field for Maiden Name
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  city: { type: String }, // New field for City
  state: { type: String }, // New field for State
  profilePhoto: { type: String }, // URL or file path for the profile photo
  membershipType: { 
    type: String, 
    enum: ['I', 'II', 'III'], // Updated to ensure only valid membership types
    default: 'I',
  },
  membershipStatus: { 
    type: String, 
    enum: ['active', 'inactive', 'pending'], // Added enum for valid membership statuses
    default: 'inactive',
  },
  uploadedDocuments: { type: [String] },
  plannerId: { 
    type: String, 
    required: true, 
    unique: true, 
    default: generatePlannerId,
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the User model
const User = mongoose.model('User', UserSchema);

export default User;
