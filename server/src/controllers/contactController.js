import { sendContactEmails } from '../services/emailService.js';

export const handleContactSubmit = async (req, res) => {
  try {
    const { name, company, phone, email, service, subject, message } = req.body;

    // Trigger the email sending service
    await sendContactEmails({
      name,
      company,
      phone,
      email,
      service,
      subject,
      message,
    });

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully. Confirmation email sent.',
    });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending your enquiry. Please try again later or contact us directly.',
    });
  }
};
