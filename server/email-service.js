
// This file is for reference only - to be implemented in a backend environment
// You would typically deploy this as a serverless function or on a server

const { Resend } = require('resend');

// Initialize Resend with your API key
const resend = new Resend('re_dsgieNYD_M2A5YBtbzNFTQ7Y7QLmKCv8Z');

/**
 * Send an email via Resend
 * @param {Object} data - Email data
 * @param {string} data.from - Sender email
 * @param {string} data.to - Recipient email
 * @param {string} data.subject - Email subject
 * @param {string} data.text - Email plain text content
 * @param {string} data.html - Email HTML content
 * @returns {Promise<Object>} - Response from Resend API
 */
async function sendEmail(data) {
  try {
    const { from, to, subject, text, html } = data;
    
    const response = await resend.emails.send({
      from: from || 'onboarding@resend.dev', // Default sender
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      html,
    });
    
    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

// Example usage in an Express.js API endpoint
/*
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  try {
    const result = await sendEmail({
      to: 'your-email@example.com',
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });
    
    if (result.success) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send email', error: result.error });
    }
  } catch (error) {
    console.error('Error in email endpoint:', error);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});
*/

module.exports = { sendEmail };
