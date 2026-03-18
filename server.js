const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Use dynamic PORT from environment, fallback to 3000
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the 'www' directory
app.use(express.static(path.join(__dirname, 'www')));

// Default route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

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

// Handle 404 - serve index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 MT Store Server running on port ${PORT}`);
    console.log(`📍 Website: http://localhost:${PORT}`);
    console.log(`🗺️  Sitemap: http://localhost:${PORT}/sitemap.xml`);
});
