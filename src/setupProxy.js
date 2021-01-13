const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/lf/jianshu/api/headerList.php', createProxyMiddleware({
        target: 'http://www.bjlink32.com/lf/jianshu/api/headerList.php',
        changeOrigin: true,
        pathRewrite: {
            '/headerList': ''
        }
    }));
    app.use('/lf/jianshu/api/home.php', createProxyMiddleware({
        target: 'http://www.bjlink32.com/lf/jianshu/api/home.php',
        changeOrigin: true,
        pathRewrite: {
            '/home': ''
        }
    }));
    app.use('/lf/jianshu/api/articleList.php', createProxyMiddleware({
        target: 'http://www.bjlink32.com/lf/jianshu/api/articleList.php',
        changeOrigin: true,
        pathRewrite: {
            '/homeList': ''
        }
    }));
    app.use('/lf/jianshu/api/detail.php', createProxyMiddleware({
        target: 'http://www.bjlink32.com/lf/jianshu/api/detail.php',
        changeOrigin: true,
        pathRewrite: {
            '/detail': ''
        }
    }));
    app.use('/lf/jianshu/api/login.php', createProxyMiddleware({
        target: 'http://www.bjlink32.com/lf/jianshu/api/login.php',
        changeOrigin: true,
        pathRewrite: {
            '/login': ''
        }
    }))
    // app.listen(3000);
}