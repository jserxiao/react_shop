// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let goodsData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: '@id()',
      name: "@ctitle(3,5)",
      des: "@csentence(8,12)",
      publishtime: "@integer(1553425967486,1553475967486)",
      detail:{
        price:"@natural(20,400)",
        goods_icon:mr.image('100x100', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

let userData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      nickname: "@name()",
      username:"@string(3)",
      password: "@string(3)",
      regtime: "@now()",
      user_icon:mr.image('50x50', mr.color(), mr.cword(1)),
      shopcar:{
        num:0,
        goods:[]
      },
      bought:{
        num:0,
        goods:[]
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = ()=>{
  return Mock.mock({
    'home': goodsData(120),//解决 goods_icon 不随机
    'user': userData(10),
    'banner|4': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        
      }
    ]
  })
};
