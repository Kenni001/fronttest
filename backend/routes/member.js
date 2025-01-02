// routes/member.js (or whatever file handles members route)
import express from 'express';
import Member from '../models/member.js'; // Add Member model import
import getMembers from '../controllers/memberController.js'; // Your controller

const router = express.Router();

// Define the route to get members (make sure it's correct)
router.get('/', getMembers);

// Delete member route - fix the path and implementation
router.delete('/:id', async (req, res) => {
    const memberId = req.params.id;
  
    try {
      const deletedMember = await Member.findByIdAndDelete(memberId);
      if (!deletedMember) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.status(200).json({ message: 'Member deleted successfully' });
    } catch (err) {
      console.error('Error deleting member:', err);
      res.status(500).json({ message: 'Error deleting member' });
    }
});

export default router;
