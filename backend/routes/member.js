// routes/member.js (or whatever file handles members route)
import express from "express";
import { getMembers, deleteMember } from "../controllers/memberController.js"; // Your controller

const router = express.Router();

// Define the route to get members (make sure it's correct)
router.get("/", getMembers);

router.delete("/:id", deleteMember);

export default router;
