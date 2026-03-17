// Optional: Simple Node.js/Express Backend for WhatsApp Notifications via Twilio
// Save this as 'backend/server.js' if you want to enable automatic WhatsApp notifications

// Install dependencies first:
// npm install express twilio body-parser cors

const express = require("express");
const twilio = require("twilio");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Your Twilio Credentials (get from https://www.twilio.com/console)
const accountSid = process.env.TWILIO_ACCOUNT_SID || "YOUR_ACCOUNT_SID";
const authToken = process.env.TWILIO_AUTH_TOKEN || "YOUR_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

// Your Twilio WhatsApp number (from Twilio sandbox)
const twilioWhatsAppNumber = "whatsapp:+14155238886"; // Example Twilio number

// Endpoint to send WhatsApp notification
app.post("/api/send-whatsapp", async (req, res) => {
  try {
    const { message, to, orderDetails } = req.body;

    // Validate input
    if (!message || !to) {
      return res.status(400).json({ error: "Missing message or phone number" });
    }

    // Send WhatsApp message via Twilio
    const result = await client.messages.create({
      from: twilioWhatsAppNumber,
      to: `whatsapp:${to}`,
      body: message,
    });

    // Log to console
    console.log(`✅ WhatsApp notification sent!`);
    console.log(`Order Details:`, orderDetails);
    console.log(`Message SID:`, result.sid);

    // Save to file (simple logging)
    const fs = require("fs");
    const timestamp = new Date().toLocaleString("en-IN");
    const logEntry = `\n[${timestamp}] Order: ${orderDetails.items} | Total: ₹${orderDetails.total}`;
    fs.appendFileSync("orders.log", logEntry);

    res.json({
      success: true,
      message: "WhatsApp notification sent successfully",
      sid: result.sid,
      orderDetails: orderDetails,
    });
  } catch (error) {
    console.error("❌ Error sending WhatsApp:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Backend server is running" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`WhatsApp notifications enabled!`);
});
