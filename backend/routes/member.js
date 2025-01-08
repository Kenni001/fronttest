// routes/member.js (or whatever file handles members route)
import express from 'express';
import Member from '../models/member.js'; // Add Member model import
import User from '../models/User.js'; // Add User model import
import getMembers from '../controllers/memberController.js'; // Your controller

const router = express.Router();

// Define the route to get members (make sure it's correct)
router.get('/', getMembers);

// Delete member route - fix the path and implementation
router.delete('/:id', async (req, res) => {
    const memberId = req.params.id;
  
    try {
      //Find the member first to get their email
      const member = await Member.findById(memberId);
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }

      // Delete from Member collection
      await Member.findByIdAndDelete(memberId);

      // Delete from User collection using the email
      await User.findOneAndDelete({ email: member.email });

      res.status(200).json({ message: 'Member deleted successfully from both collections' });
    } catch (err) {
      console.error('Error deleting member:', err);
      res.status(500).json({ message: 'Error deleting member' });
    }
});

export default router;
