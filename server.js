const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files from the 'www' directory
app.use(express.static('www'));

// Serve robots.txt for SEO
app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'robots.txt'));
});

// Serve sitemap.xml for search engines
app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'sitemap.xml'));
});

// Set security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 MT Store Server running on http://localhost:${PORT}`);
    console.log(`📍 Robots.txt available at http://localhost:${PORT}/robots.txt`);
    console.log(`🗺️  Sitemap.xml available at http://localhost:${PORT}/sitemap.xml`);
    console.log(`Network access on local WiFi: http://192.168.1.7:${PORT}`);
    console.log(`Your IP: 192.168.1.7`);
});
