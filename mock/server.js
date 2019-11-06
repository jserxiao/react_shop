const jsonServer = require('json-server');//在node里面使用json-server包

const db = require('./db.js');//引入mockjs配置模块

const path = require('path');
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

const server = jsonServer.create();//创建jsonserver 服务对象
const router = jsonServer.router(db);//创建路由对象

const middlewares = jsonServer.defaults({
  static:path.join(__dirname, '/public'),//静态资源托管

});

let mock='/mock';//创建根api名 这里的 /mock 如同 后端真实/api

//路由别名
const rewriter = jsonServer.rewriter({
  [mock+"/*"]: "/$1",

  "/product\\?dataName=:dataName": "/:dataName",
  "/banner\\?dataName=:dataName": "/:dataName",
  "/detail\\?dataName=:dataName&id=:id": "/:dataName/:id",

  // "/product/del\\?dataName=:dataName&id=:id": "/:dataName/:id",
  // "/product/add\\?dataName=:dataName": "/:dataName",
  // "/product/check\\?dataName=:dataName&id=:id": "/:dataName/:id"
});

server.use(middlewares);

server.use((request, res, next) => {//可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  next();
});

server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件

//模拟校验

server.get(mock+'/login', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.query.username;
  let password=req.query.password;
  (username === 'aa' && password === 'aa123')?
    res.jsonp({
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(1,5),
        "fans": mr.integer(1,5),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })

});
server.post(mock+'/reg', (req, res) => {
  let username=req.body.username;
  (username !== 'aa') ?
    res.jsonp({
      "err": 0,
      "msg": "注册成功",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "注册失败",
    })

});

server.get(mock+'/user', (req, res) => {
  Math.random()<.5 ?
    res.jsonp({
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })
});



//自定义返回内容
router.render = (req, res) => {
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  console.log(req.url);
  setTimeout(()=>{
    if (req.url!=='/user'){

        res.jsonp({
          err: len !== 0 ? 0 : 1,
          msg: len !== 0 ? '成功' : '失败',
          data: res.locals.data
        })

    } else {
      res.jsonp(res.locals.data)
    }

  },1000)

};

server.use(rewriter);//路由重写
server.use(router);//路由响应

//开启jsonserver服务
server.listen(3333, () => {
  console.log('mock server is running')
});