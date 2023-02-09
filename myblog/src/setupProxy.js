const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://cj.lziapi.com', //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            /*
        changeOrigin设置为true时，服务器收到的请求头中的host为：https://www.meipinshu.com
        changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
        changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
            pathRewrite: { '^/api': '' } //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        })
        // proxy('/ajax', {
        //     //可以设置多个请求的代理转发
        //     target: 'http://localhost:5001',
        //     changeOrigin: true,
        //     pathRewrite: { '^/api2': '' }
        // })
    );
};
