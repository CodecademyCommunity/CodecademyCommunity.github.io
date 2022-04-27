const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api/socket', {
            target: 'ws://localhost:5000',
            ws: true,
            changeOrigin: true,
        })
    );
};