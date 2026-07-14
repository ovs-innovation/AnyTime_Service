import { sanitizeObject } from '../utils/sanitize.js';

export const validateContactFields = (req, res, next) => {
  // Sanitize all text fields first
  req.body = sanitizeObject(req.body);

  const { name, phone, email, service, subject, message } = req.body;
  const errors = {};

  // Name Validation
  if (!name || name.trim() === '') {
    errors.name = 'Name is required';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Phone Validation
  if (!phone || phone.trim() === '') {
    errors.phone = 'Phone number is required';
  } else {
    const phoneRegex = /^[+\d\s-]{8,15}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = 'Invalid phone number format';
    }
  }

  // Email Validation
  if (!email || email.trim() === '') {
    errors.email = 'Email address is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address format';
    }
  }

  // Service Validation
  if (!service || service.trim() === '') {
    errors.service = 'Service selection is required';
  }

  // Subject Validation
  if (!subject || subject.trim() === '') {
    errors.subject = 'Subject is required';
  } else if (subject.length < 5) {
    errors.subject = 'Subject must be at least 5 characters long';
  }

  // Message Validation
  if (!message || message.trim() === '') {
    errors.message = 'Message is required';
  } else if (message.length < 20) {
    errors.message = 'Message must be at least 20 characters long';
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  next();
};
