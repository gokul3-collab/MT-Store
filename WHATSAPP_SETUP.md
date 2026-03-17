# WhatsApp Notification Setup for MT Store

Your MT Store is now configured to send WhatsApp notifications when customers place orders. Here are the setup options:

## Option 1: Using Twilio (Recommended - Free Trial Available)

### Step 1: Create Twilio Account

1. Go to [Twilio.com](https://www.twilio.com)
2. Sign up for a free account
3. Verify your phone number
4. Get your Twilio phone number (with WhatsApp enabled)

### Step 2: Enable WhatsApp on Twilio

1. Go to Twilio Console → Messaging → WhatsApp
2. Click "Try it out" to get a WhatsApp-enabled number
3. Accept the Twilio Sandbox

### Step 3: Get Your Credentials

- **Account SID**: Found in Twilio Console
- **Auth Token**: Found in Twilio Console
- **Twilio WhatsApp Number**: e.g., +1234567890 (from sandbox)

### Step 4: Create Backend File (backend.js)

```javascript
// This would run on your server (Node.js example)
const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";
const client = require("twilio")(accountSid, authToken);

app.post("/send-whatsapp", (req, res) => {
  const { orderDetails } = req.body;
  const message = `🎉 New Order!\n📦 Items: ${orderDetails.items}\n💰 Total: ₹${orderDetails.total}`;

  client.messages
    .create({
      from: "whatsapp:+1234567890", // Your Twilio WhatsApp number
      to: "whatsapp:+919363750020", // Customer's WhatsApp
      body: message,
    })
    .then((message) => res.json({ success: true }))
    .catch((err) => res.status(500).json({ error: err.message }));
});
```

### Step 5: Update Frontend Code

In `app.js`, update the `sendWhatsAppNotification` function:

```javascript
function sendWhatsAppNotification(orderDetails) {
  const message = `🎉 New Order Alert!\n📦 Items: ${orderDetails.items}\n💰 Total: ₹${orderDetails.total}\n📅 Time: ${orderDetails.timestamp}`;

  // Send to your backend server
  fetch("/send-whatsapp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderDetails }),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Error sending WhatsApp:", err));
}
```

---

## Option 2: Using WhatsApp Business API (Official)

1. Apply for WhatsApp Business API at [Meta Business Manager](https://business.facebook.com)
2. Get approved for business use
3. Use their official webhook system
4. More reliable but slower approval process

---

## Option 3: Using Webhook Service (Simplest for Testing)

### Using Zapier Integration:

1. Go to [Zapier.com](https://zapier.com)
2. Create a free account
3. Set up a webhook trigger
4. Connect to WhatsApp integration
5. Configure message template with order details

---

## Option 4: Simple Local Setup (Testing Only)

For testing purposes, the current setup opens WhatsApp Web with the order details:

Edit `app.js` and uncomment this line in `sendWhatsAppNotification()`:

```javascript
window.open(whatsappURL, "_blank");
```

This will open WhatsApp Web with pre-filled message (user must send manually).

---

## Current Implementation

Your app currently:
✅ Captures order details (items, total, timestamp)
✅ Prepares notification message
✅ Logs order to browser console
✅ Can open WhatsApp Web (manual send)

To enable **automatic** notifications, you need:

- Backend server (Node.js, Python, etc.)
- Twilio account (or similar API)
- Web server to host everything

---

## Quick Test

1. Open your MT Store at `http://localhost:5500`
2. Add slippers to cart
3. Click "Checkout"
4. Open browser Console (F12)
5. You'll see "Order Notification:" logged with order details

---

## Your WhatsApp Number

📱 **+91 9363750020** (Already configured)

---

## Recommended Next Steps

1. **Free Option**: Sign up for Twilio free trial ($5 credit)
2. **Quick Test**: Uncomment the `window.open()` line to test manually
3. **Production**: Set up proper backend with Twilio/WhatsApp API

Need help? Update the configuration files with your Twilio credentials when you're ready!
