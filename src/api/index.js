var Mock = require('mockjs');
var Random = Mock.Random

const produceData = function () {
  let articles = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      id: i,
      title: Random.csentence(5),
      author:Random.cname(),
      content: Random.cparagraph(5, 7),
      time: Random.date() + ' ' + Random.time(),
      xihuan:Random.zip(),
      guanzhu:Random.zip(),
      pinglun:Random.zip(),
      zishu:Random.zip(),
      yuedu:Random.zip(),
      loves:Random.zip(),
      shang:Random.zip(),
      qianming:Random.csentence(10, 30),
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}
// 第三个参数可以是对象也可以是返回对象的函数
Mock.mock('www://bb.com', 'get', produceData)
