/**
 * Generates the HTML template for admin notification emails.
 */
export const getAdminNotificationTemplate = (data) => {
  const { name, company, phone, email, service, subject, message } = data;
  const companyRow = company ? `<tr>
    <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Company:</td>
    <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${company}</td>
  </tr>` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Business Enquiry</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #334155; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; bg-color: #ffffff; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .header { background-color: #D62828; color: #ffffff; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
        .content { padding: 30px 20px; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .message-box { background-color: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #D62828; margin-top: 15px; font-style: italic; }
        .footer { background-color: #0F172A; color: #94a3b8; text-align: center; padding: 20px; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Business Enquiry Received</h1>
          <p style="margin: 5px 0 0 0; color: #fecaca; font-size: 14px;">Anytime Services Hub</p>
        </div>
        <div class="content">
          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">You have received a new enquiry through the Anytime Services website contact form. The details are below:</p>
          <table class="table">
            <tbody>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
              </tr>
              ${companyRow}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #D62828; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Service Needed:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><span style="background-color: #fee2e2; color: #991b1b; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">${service}</span></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0F172A;">${subject}</td>
              </tr>
            </tbody>
          </table>
          <div style="font-weight: bold; margin-top: 20px;">Enquiry Message:</div>
          <div class="message-box">
            "${message}"
          </div>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Anytime Services Admin Portal. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates the HTML template for customer confirmation emails.
 */
export const getCustomerConfirmationTemplate = (data) => {
  const { name, service } = data;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Contacting Anytime Services</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #334155; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; bg-color: #ffffff; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .header { background-color: #0F172A; padding: 30px 20px; text-align: center; border-bottom: 4px solid #D62828; }
        .logo-box { display: inline-block; width: 40px; height: 40px; background-color: #D62828; border-radius: 8px; line-height: 40px; text-align: center; color: white; font-weight: bold; font-size: 20px; margin-bottom: 10px;}
        .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: bold; }
        .content { padding: 35px 25px; line-height: 1.6; }
        .cta-btn { display: inline-block; background-color: #D62828; color: #ffffff !important; text-decoration: none; padding: 12px 25px; font-weight: bold; border-radius: 6px; margin: 20px 0; }
        .footer { background-color: #f1f5f9; color: #64748b; text-align: center; padding: 20px; font-size: 12px; border-top: 1px solid #e2e8f0; }
        .contact-info { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin-top: 25px; font-size: 14px;}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-box">A</div>
          <h1>Anytime Services</h1>
          <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 13px;">Professional Workforce & Facility Solutions</p>
        </div>
        <div class="content">
          <p style="font-size: 16px; font-weight: bold; color: #0F172A;">Dear ${name},</p>
          <p>Thank you for reaching out to <strong>Anytime Services</strong> regarding our <strong>${service}</strong>.</p>
          <p>This email is to confirm that we have received your business enquiry. Our regional sales team is already reviewing your requirements. A customer service representative will get back to you with a customized proposal or to schedule a call within the next <strong>4 business hours</strong>.</p>
          
          <div class="contact-info">
            <h3 style="margin-top: 0; color: #0F172A; font-size: 15px;">Need immediate assistance?</h3>
            <p style="margin: 5px 0;">📞 Call us: <strong>+91 9818662234</strong></p>
            <p style="margin: 5px 0;">✉️ Email support: <strong>support@anytimeservices.in</strong></p>
            <p style="margin: 5px 0;">⏰ Business hours: <strong>Mon - Fri (9:00 AM - 7:00 PM)</strong></p>
          </div>

          <p style="margin-top: 25px;">Best Regards,<br><strong>The Anytime Services Team</strong></p>
        </div>
        <div class="footer">
          <p>You received this email because you filled out a contact form on our website.<br>
          123, Business Park, Andheri East, Mumbai – 400069, Maharashtra</p>
          <p style="margin-top: 10px;">© ${new Date().getFullYear()} Anytime Services. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
