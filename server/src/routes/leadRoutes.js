import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { createLead, deleteLead, getLeads, updateLead } from '../controllers/leadController.js';
import { protect } from '../middleware/auth.js';
import { leadValidation, updateLeadValidation } from '../middleware/validate.js';

const router = Router();
const publicLeadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many submissions. Please try again later.' }
});

router.post('/', publicLeadLimiter, leadValidation, createLead);
router.get('/', protect, getLeads);
router.put('/:id', protect, updateLeadValidation, updateLead);
router.delete('/:id', protect, deleteLead);

export default router;
