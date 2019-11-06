const proxy = require('http-proxy-middleware'); //需要安装中间件

module.exports = function(app) {

  app.use(
    proxy("/api", {
      // target: 'http://11.22.123.255:3000',
      // target: 'https://uncle9.top',
      target: 'http://localhost:80',
      changeOrigin: true//是否参加虚拟服务器
    })
  );

  app.use(
    proxy("/v2", {//   /v2/movie/in_theaters?start=0&count=10
      target: "https://douban.uieee.com",
      changeOrigin: true
    })
  );

  app.use(
    proxy("/mock", {
      target: 'http://localhost:3333',
      changeOrigin: true
    })
  );

};