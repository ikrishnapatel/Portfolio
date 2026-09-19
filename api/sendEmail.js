export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message, to_name } = req.body || {};

  // 1. SECURITY FIX: Backend Validation
  // Attackers can bypass React frontend validation. We must check data on the server.
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 2. SECURITY FIX: Payload Size Limits (Basic DOS Protection)
  // Prevent attackers from sending massive strings to crash the function or hit EmailJS limits
  if (message.length > 1000 || name.length > 100 || email.length > 100) {
    return res.status(400).json({ error: 'Payload too large' });
  }

  // 3. SECURITY FIX: Email Format Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const serviceId = process.env.emailjsServiceId;
  const templateId = process.env.emailjsTemplateId;
  const publicKey = process.env.emailjsPublicKey;
  const privateKey = process.env.emailjsPrivateKey;

  if (!privateKey) {
    console.error("Missing EMAILJS_PRIVATE_KEY in environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: {
      to_name: to_name || "Krishna Patel",
      name: name,
      email: email,
      phone: phone,
      message: message,
      reply: email
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      const errorText = await response.text();
      console.error('EmailJS API Error:', response.status, errorText);
      // 4. SECURITY FIX: Error Information Leakage
      // Do not return raw third-party error text to the client. Keep it in server logs only.
      return res.status(500).json({ error: 'Failed to process email request' });
    }
  } catch (error) {
    console.error('Fetch Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
