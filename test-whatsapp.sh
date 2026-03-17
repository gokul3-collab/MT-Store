#!/bin/bash
# WhatsApp Notification Test Script
# Run this to test your WhatsApp notifications

echo "🧪 MT Store WhatsApp Notification Test"
echo "======================================"
echo ""

# Test 1: Check configuration file
echo "✓ Test 1: Checking whatsapp-config.js..."
if [ -f "whatsapp-config.js" ]; then
    echo "  ✅ Configuration file found"
    grep "METHOD" whatsapp-config.js > /dev/null && echo "  ✅ Config has method setting"
    grep "9363750020" whatsapp-config.js > /dev/null && echo "  ✅ Your number configured"
else
    echo "  ❌ Configuration file not found"
fi

echo ""

# Test 2: Check app.js has functions
echo "✓ Test 2: Checking app.js functions..."
grep "sendWhatsAppNotification" app.js > /dev/null && echo "  ✅ Notification function found"
grep "sendViaTwilio" app.js > /dev/null && echo "  ✅ Twilio integration ready"
grep "sendViaWebhook" app.js > /dev/null && echo "  ✅ Webhook integration ready"

echo ""

# Test 3: Check HTML includes script
echo "✓ Test 3: Checking index.html..."
grep "whatsapp-config.js" index.html > /dev/null && echo "  ✅ Config file referenced"
grep "app.js" index.html > /dev/null && echo "  ✅ App.js referenced"

echo ""

# Manual Test Instructions
echo "🎯 Manual Testing Steps:"
echo "======================"
echo ""
echo "1. Start your local server:"
echo "   python -m http.server 8000"
echo "   OR"
echo "   Live Server in VS Code"
echo ""
echo "2. Open browser: http://localhost:8000"
echo ""
echo "3. Add slippers to cart"
echo ""
echo "4. Change method in whatsapp-config.js:"
echo "   method: 'manual'  (to test WhatsApp Web)"
echo "   method: 'twilio'  (to test auto-send)"
echo ""
echo "5. Click 'Checkout'"
echo ""
echo "6. Check WhatsApp (browser or app)"
echo ""
echo "✅ Test Complete!"
echo ""
echo "💡 Tip: Open browser console (F12) to see detailed logs"
