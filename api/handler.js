// API handler for Vercel serverless functions
// This is a placeholder for any future API endpoints
// Currently, all static files are served from the 'www' folder

module.exports = (req, res) => {
    res.status(404).json({ 
        error: 'API endpoint not found',
        path: req.url 
    });
};
