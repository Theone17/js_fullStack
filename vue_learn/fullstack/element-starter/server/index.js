// 后端入口文件
const express = require('express');
const http = require('http');
const app = express();   // 应用
// /api后端API服务
const api = require('./api');
app.use(api);
app.set('port', 3000);
// app.all('*',function (req, res, next) {
	// 	console.log(req,res)
	// 	res.header("Access-Control-Allow-Origin", "*");
	//  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	//  res.header('Access-Control-Allow-Headers', 'Content-Type');
	//  next();
//});

http
	.createServer(app)
	.listen(app.get('port'), '0.0.0.0', function() {
		console.log('Express server listening on port')
	})