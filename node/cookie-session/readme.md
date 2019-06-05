## why

无状态

## cookie
规定死的
本地存储
怎么来：
  1. js   document.cookie 可读可写
  2. 服务端   通过Set-Cookie响应头设置 cookie

  内容:
  name:
  value:
  path: cookie 在哪个路径下生效
    /            所有路径
    /user         /user user以及user下面的
    /user/abc     /user/abc use/abc以及下面的
  domain:

  httpOnly: true/false 如果设置为true，就不能通过js获取cookie的值
  maxAge: 在几秒后删除cookie
    koa: ms     js: s
  secure: 安全 只会在https协议下传输

  作用范围：
    domain + path
    在什么域名什么路径下面生效
    浏览器检查存储的cookie，会发送给服务端
    而且http传输报文的大小
    放在Cookie请求头里发送

  用途：
    状态管理 T
    用户个性化设置 F


## session
会话
靠后台自己实现的
很多个用户产生很多个session

userId
  session表 
    sessionId 用户会话时通过自己的sessionId查询自己的状态
    cookie: sessionID=id