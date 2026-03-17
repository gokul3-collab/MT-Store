# 🚀 Deploy to Railway (Free & Easy)

Railway.app makes it super easy to deploy your MT Store online so Google can find it!

## ⚡ Quick Deploy (5 minutes)

### Step 1: Create Railway Account
1. Go to **https://railway.app**
2. Click "Start Project"
3. Sign up with GitHub OR email
4. Done! ✅

### Step 2: Deploy Your Project
**Option A: Using Railway Dashboard (Easiest)**
1. Login to Railway
2. Click "New Project"
3. Click "Deploy from New Repo"
4. Connect GitHub (link your MT-Store repo)
5. Select your MT-Store repository
6. Railway auto-deploys! 🎉

**Option B: Using Railway CLI (Command Line)**
```bash
# Open PowerShell in MT-Store folder
cd c:\Users\spgok\OneDrive\Desktop\MT-Store

# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy your project
railway up

# Get your live URL
railway open
```

### Step 3: Get Your Live URL
After deployment, Railway gives you a URL like:
```
https://mtstore-abc123.railway.app
```

**Your app is now LIVE on the internet!** 🌐

---

## 🌍 Connect Custom Domain

### Option A: Using GoDaddy Domain (Recommended)
1. Buy domain at GoDaddy: **mtstore.com** (₹300-500/year)
2. Go to Railway Dashboard
3. Click your project
4. Go to "Settings" → "Domains"
5. Click "Add Domain"
6. Enter: `mtstore.com`
7. Copy the CNAME value from Railway
8. Go to GoDaddy DNS settings
9. Add the CNAME record
10. Wait 5-10 minutes for DNS to update
11. Your site is at **mtstore.com** ✅

### Option B: Using Railway's Free Domain
Railway gives free domains too:
- Click "Deployments"
- Copy your Railway URL
- Share this link: https://mtstore-abc123.railway.app

---

## ✅ Submit to Google (After Going Live)

### Step 1: Add to Google Search Console
1. Go to https://search.google.com/search-console
2. Click "URL Prefix"
3. Enter: `https://mtstore.com`
4. Click "Continue"
5. Verify by DNS or Upload HTML file
6. Done! ✅

### Step 2: Submit Sitemap
1. In Search Console left menu, click "Sitemaps"
2. Enter: `https://mtstore.com/sitemap.xml`
3. Click "Submit"
4. Google starts indexing! 🎉

### Step 3: Check Status
- Wait 1-7 days
- Go to "Coverage" in Search Console
- Should show "Indexed" status
- Check "Performance" to see search clicks

---

## 📊 Monitor Your Site

### Google Search Console
- https://search.google.com/search-console
- See which keywords you rank for
- Check indexing status
- View user searches
- Get backlink info

### Google Analytics (Optional)
1. Go to https://analytics.google.com
2. Create account
3. Add property for your domain
4. Get Tracking ID
5. Copy code and paste in HTML `<head>`
6. Track visitor behavior!

---

## 🆚 Comparison: Hosting Providers

| Service | Cost | Setup | Custom Domain | Free Tier | Best For |
|---------|------|-------|---------------|-----------|----------|
| **Railway** | Free-$5/mo | 2 min | YES | ✅ 100 hours/mo | **START HERE** |
| **Render** | Free-$10/mo | 5 min | YES | ✅ Limited | Easy deploy |
| **Vercel** | Free-$20/mo | 2 min | YES | ✅ Yes | Speed focus |
| **Heroku** | Paid only | 10 min | YES | ❌ Removed | Not recommended |
| **GoDaddy** | ₹4000+/mo | 1 hour | YES | ❌ No | Traditional |
| **Hostinger** | ₹399+/mo | 1 hour | YES | ❌ No | Budget |

**Railway is BEST for beginners!**

---

## 💾 Environment Variables (If Needed)

If you have sensitive data, store in Railway environment variables:

1. Go to Railway Project
2. Click "Variables"
3. Add variable: `WHATSAPP_PHONE=919363750020`
4. Access in code: `process.env.WHATSAPP_PHONE`

Protect your WhatsApp number and API keys this way!

---

## 🔗 After Going Live

Once your domain is live:

1. **Update all hardcoded URLs**
   - Change `localhost:3000` → `mtstore.com`
   - In whatsapp-config.js
   - In app.js

2. **Test your forms**
   - Add to cart
   - Checkout
   - WhatsApp notifications
   - Everything should work!

3. **Share on social media**
   - Facebook
   - Instagram  
   - WhatsApp groups
   - Get those backlinks!

4. **Monitor in Google Search Console**
   - Track your rankings
   - Fix any errors
   - Add properties (www.mtstore.com, etc)

---

## 🆘 Troubleshooting

**Q: Deployment failed?**
A: Check logs in Railway Dashboard → Deployment → View Logs
   - Most errors are in the logs
   - Common fix: need proper package.json

**Q: Site down after deployment?**
A: Check Railway status and restart
   - Click Project → Settings → Restart Deployment
   - Check server logs for errors

**Q: Custom domain not working?**
A: DNS takes time to update
   - Wait 5-30 minutes
   - Check DNS settings in GoDaddy
   - Verify Railway CNAME is correct

**Q: Images not showing?**
A: Update image paths
   - Change relative paths to absolute
   - Or ensure static folder is served

**Q: WhatsApp integration not working?**
A: Update backend URL
   - In whatsapp-config.js
   - Change `localhost:3000` → `mtstore.com`
   - HTTPS required for production!

---

## 📈 Next Steps

```
1. ⏭️ Create Railway account (5 min)
2. ⏭️ Deploy your project (2 min)
3. ⏭️ Get Railway URL (instant)
4. ⏭️ Test all features work
5. ⏭️ Buy custom domain - mtstore.com (₹300)
6. ⏭️ Connect domain to Railway (10 min)
7. ⏭️ Submit to Google Search Console (5 min)
8. ⏭️ Submit sitemap to Google (2 min)
9. ⏭️ Wait 1-7 days for indexing
10. ⏭️ See your site in Google! 🎉
```

---

## 💬 Questions?

- Railway Docs: https://docs.railway.app
- Google Search Console Help: https://support.google.com/webmasters
- Contact us: info@mtstore.com

---

**Total Time to Get on Google: ~30 minutes**
**Total Cost: ₹300 (domain only, hosting is free)**

**Let's make MT Store visible to the world!** 🌍✨

---

**Last Updated:** March 17, 2026
