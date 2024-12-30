import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import CORS
import authRoutes from "./routes/auth.js"; // Note the .js extension in ES modules
import path from "path";
import adminRoutes from "./routes/admin.js";
import { fileURLToPath } from "url";
import adminDashboardRoutes from "./routes/adminDashboard.js";
import memberRoutes from "./routes/member.js";
import paymentRoutes from "./routes/payment.js";
import memoRoutes from "./routes/memoRoutes.js";
import membershipValidationRouter from "./routes/membershipValidation.js";
import User from "./models/User.js";
// import validationRoutes from './routes/validation.js';
// import plannerValidationRoutes from './routes/plannerValidation.js';
// import userRoutes from './routes/auth.js';  // Import your existing user routes
// import adminRoutes from './routes/admin.js';  // Import the newly created admin routes
// import memoRoutes from './routes/memo.js';
// import paymentRoutes from './routes/payment.js';
const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the directory of the current file
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors()); // This will allow requests from all origins

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.resolve("public/uploads")));

// Connect to MongoDB
const mongoURL = process.env.MONGODB_URI;

mongoose
    .connect(mongoURL, { connectTimeoutMS: 30000 })
    .then(async () => {
        console.log("Connected to MongoDB Atlas successfully!");

        // List all collections
        const collections = await mongoose.connection.db
            .listCollections()
            .toArray();
        console.log("Collections in the database:");
        collections.forEach((collection) => console.log(collection.name));

        // Optionally, close the connection
        //mongoose.connection.close();
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas:", error.message);
    });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminDashboardRoutes);
app.use("/api/admin/members", memberRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/memos", memoRoutes);
app.use("/api/membership", membershipValidationRouter);

// app.use('/api/validation', validationRoutes);
// app.use('/api/planner', plannerValidationRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/memo', memoRoutes);
// app.use('/api/payment', paymentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/users', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();  // You can add query filters here if needed
        res.status(200).json({ message: 'Users retrieved successfully!', users });
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
});
