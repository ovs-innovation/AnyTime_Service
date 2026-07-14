import nodemailer from 'nodemailer';

export const sendContactEmails = async (data) => {
  const { name, company, phone, email, service, subject, message } = data;

  // Hardcoding the transporter directly inside the function execution block
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for port 465
    auth: {
      user: 'rs8592474@gmail.com',
      pass: 'gwhzgvixvkpdvpui',
    },
  });

  const mailOptions = {
    from: 'rs8592474@gmail.com',
    to: 'rs8592474@gmail.com',
    replyTo: email,
    subject: `🚗 New Lead [${service || 'General'}] - ${subject || 'Website Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px; color: #1e293b; background-color: #ffffff;">
        <h2 style="color: #2563eb; margin-top: 0; font-size: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
          New Website Inquiry Received
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service Requested:</strong> ${service || 'General'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #cbd5e1;">
          <p style="margin: 0; line-height: 1.5;">${message}</p>
        </div>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};