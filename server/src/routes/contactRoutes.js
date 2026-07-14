import { Router } from 'express';
import { handleContactSubmit } from '../controllers/contactController.js';
import { validateContactFields } from '../middleware/validator.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Apply rate limiting and validation to the contact form submissions
router.post('/contact', contactRateLimiter, validateContactFields, handleContactSubmit);

export default router;
export { router as contactRoutes };
