import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash the password before saving
// adminSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// Method to compare the entered password with the hashed password
adminSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;

// // Use ES module import syntax
// import mongoose from "mongoose";

// // Define the adminSchema
// const adminSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// // Create the Admin model
// const Admin = mongoose.model("Admin", adminSchema);

// // Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://pioneeringv:AKliw3gz0Z6eCiG5@cluster0.dprcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(async () => {
//     console.log("Connected to MongoDB");

//     // Prepare the admin data with the specified _id
//     const adminData = {
//       _id: new mongoose.Types.ObjectId("676466693f5b01db219c8920"),
//       name: "linda", // Replace with desired name
//       email: "linda@gmail.com", // Replace with desired email
//       password: "linda123", // Replace with hashed password
//     };

//     // Insert the document
//     try {
//       const admin = new Admin(adminData);
//       await admin.save();
//       console.log("Admin created successfully:", admin);
//     } catch (error) {
//       console.error("Error creating admin:", error.message);
//     } finally {
//       mongoose.connection.close();
//     }
//   })
//   .catch((err) => console.error("Error connecting to MongoDB:", err.message));
