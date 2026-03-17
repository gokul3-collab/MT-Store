# 🚀 MT Store WhatsApp Notifications - Quick Start Guide

Your MT Store now has **WhatsApp order notification** integrated! When customers order slippers, you'll get notified at **+91 9363750020**.

---

## ✅ What's Already Set Up

Your app automatically captures:

- ✓ Customer orders (items & total)
- ✓ Order timestamp
- ✓ Notification message template
- ✓ Three integration methods ready to use

---

## 📱 Integration Methods (Choose One)

### **Method 1: Manual Mode (Works Right Now! 🎉)**

- Opens WhatsApp Web when customer orders
- You manually review and send message
- **No setup needed!**
- **How to enable**: Edit `app.js` and uncomment line in `sendViaWhatsAppWeb()`

---

### **Method 2: Twilio API (Automatic - Recommended)**

- Auto-sends WhatsApp messages
- Free trial with $5 credit
- Professional & reliable

**Setup Steps:**

1. **Create Twilio Account** (5 minutes)
   - Go to https://www.twilio.com/try-twilio
   - Sign up and verify phone
   - Get free $5 credit

2. **Enable WhatsApp**
   - In Twilio Console → Messaging → WhatsApp
   - Click "Try it out"
   - Get Sandbox WhatsApp number (e.g., +14155238886)

3. **Get Credentials**
   - Find in Console:
     - Account SID
     - Auth Token
   - Save these securely

4. **Fill Configuration in `whatsapp-config.js`**

   ```javascript
   twilio: {
     accountSid: 'YOUR_ACCOUNT_SID',
     authToken: 'YOUR_AUTH_TOKEN',
     whatsappNumber: '+14155238886' // Your Twilio number
   }
   ```

5. **Set Up Backend (Choose One Option)**

   **Option A: Using Node.js (Local Machine)**

   ```bash
   # In MT-Store folder
   npm init -y
   npm install express twilio body-parser cors
   node backend-server-example.js
   ```

   Then update `whatsapp-config.js`:

   ```javascript
   backendUrl: "http://localhost:3000/api/send-whatsapp";
   ```

   **Option B: Using Webhook Service (Easier)**
   - Use https://zapier.com (free tier)
   - Or https://integromat.com
   - Configure webhook to receive orders

6. **Update Configuration**

   ```javascript
   // In whatsapp-config.js
   method: "twilio"; // Change from 'manual'
   ```

7. **Test Your Setup**
   - Open http://localhost:5500
   - Add items to cart
   - Click "Checkout"
   - Check WhatsApp - notification should arrive! ✅

---

### **Method 3: Webhook Service (Alternative)**

- Send orders to third-party service
- Services: Zapier, Make (Integromat), etc.

**Setup:**

1. Create account on https://zapier.com
2. Create webhook endpoint
3. Connect to WhatsApp integration
4. Get webhook URL
5. Update in `whatsapp-config.js`:
   ```javascript
   method: 'webhook',
   webhook: {
     url: 'https://your-webhook-url.com/webhook',
     apiKey: 'YOUR_API_KEY'
   }
   ```

---

## 📂 Files Included

| File                        | Purpose                                         |
| --------------------------- | ----------------------------------------------- |
| `whatsapp-config.js`        | Configuration file - fill with your credentials |
| `app.js`                    | Updated with WhatsApp notification functions    |
| `WHATSAPP_SETUP.md`         | Detailed documentation                          |
| `backend-server-example.js` | Example Node.js backend (for Twilio)            |

---

## 🔧 Current Status

**Frontend:** ✅ Ready  
**Configuration:** ⚙️ Needs your credentials  
**Backend:** 📦 Optional (for auto-sending)

---

## 🎯 Recommended Path (Easiest)

1. **Quick Manual Test** (Right Now)
   - Uncomment this line in `app.js` in `sendViaWhatsAppWeb` function:
     ```javascript
     window.open(whatsappURL, "_blank");
     ```
   - Test: Place order → WhatsApp Web opens with pre-filled message
   - You send manually (30 seconds setup)

2. **Enable Twilio** (When ready)
   - Sign up (2 minutes)
   - Get credentials (2 minutes)
   - Update config (2 minutes)
   - Auto-notifications ready! (no manual sending)

---

## 📋 WhatsApp Every Order Gets

```
🎉 New Order Alert!

📦 Items: Premium Comfort Slippers x1, Cozy Thermal Slippers x2
💰 Total: ₹1200
📅 Time: 6/3/2026, 3:45 PM

MT Store - Customer Order
```

---

## 🆘 Troubleshooting

| Issue                   | Solution                                     |
| ----------------------- | -------------------------------------------- |
| Whatsapp not opening    | Uncomment the line in `sendViaWhatsAppWeb()` |
| Twilio not sending      | Check Account SID & Auth Token in config     |
| CORS errors             | Use backend server instead of direct API     |
| Can't get Twilio number | Wait for WhatsApp approval (usually instant) |

---

## 🔐 Security Note

⚠️ **Never hardcode credentials in frontend!**
For production:

- Use environment variables
- Use backend server
- Never expose API keys in JavaScript

---

## 📞 Your WhatsApp Number

**Already Configured:** +91 9363750020  
Can be changed in `whatsapp-config.js` under `recipient.phoneNumber`

---

## Next Steps

1. **Choose your method** (Manual / Twilio / Webhook)
2. **Follow setup steps** above
3. **Update configuration**
4. **Test with an order**
5. **You're done! 🎉**

---

**Questions?** Check WHATSAPP_SETUP.md for detailed documentation!
