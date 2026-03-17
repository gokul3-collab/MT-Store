// WhatsApp Notification Configuration
// Update this file with your credentials to enable automatic WhatsApp notifications

const WHATSAPP_CONFIG = {
  // Method: 'twilio', 'webhook', 'manual'
  method: "manual", // Change to 'twilio' when you have credentials

  // Twilio Configuration (if method = 'twilio')
  twilio: {
    accountSid: "YOUR_ACCOUNT_SID_HERE",
    authToken: "YOUR_AUTH_TOKEN_HERE",
    whatsappNumber: "+1234567890", // Your Twilio WhatsApp number
    backendUrl: "http://localhost:3000/api/send-whatsapp", // Your backend URL
  },

  // Recipient Configuration
  recipient: {
    phoneNumber: "919363750020", // Your WhatsApp number (without +)
    countryCode: "+91", // India
  },

  // Webhook Configuration (if method = 'webhook')
  webhook: {
    url: "https://your-webhook-service.com/send-whatsapp",
    apiKey: "YOUR_API_KEY_HERE",
  },

  // Manual Configuration (for WhatsApp Web click-to-chat)
  manual: {
    enabled: true,
  },
};

// Function to toggle WhatsApp notification method
function setWhatsAppMethod(method) {
  WHATSAPP_CONFIG.method = method;
  console.log(`WhatsApp notification method set to: ${method}`);
  console.log("Configuration:", WHATSAPP_CONFIG);
}

// Export for use in app.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = WHATSAPP_CONFIG;
}
