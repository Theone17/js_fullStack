大前端全栈开发思路

在前端vue项目目录下，建一个server用来做mvc就好

- 前后端分离
	后端负责提供/api，在server/目录下
	前端在src/目录下
	后端就负责API服务

1. 后端在3000端口，未来等着ngnix 80 -> 3000
	/api API服务，等着前端调用	/		vue打包好的dist目录index.html readFile返回
2. 前端在8080端口，负责vue-router vuex axios
3. 前后端联调，api数据->vue组件的data
4. 跨域	前端面试最重要的问题
	domain 域名
	端口，cross domain
	前端不允许，有安全问题
	从前端考虑，页面上显示的东西要安全
	从后端考虑
- 前端
	book.douban.com
	www.douban.com
	subdomain:domain:port都一样
	js同源机制，相同的源是值得依赖的
	前后端 8080：3000跨域
	不跨，fetch('/api/user/login)	404
	3000 /api/ proxy 代理
	/api/ 匹配
	target: http://localhost:3000/api，
	changeOrigin: true
	发出去的请求也不跨