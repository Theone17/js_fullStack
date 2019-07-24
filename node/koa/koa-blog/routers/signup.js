const router = require('koa-router')();
const controller = require('../controllers/c-signup');

// router -> controller -> model|view 路由交给controller层，再交给model或view层
// 负责render ejs
router.get('/signup', controller.getSignup);
// 负责model save
// router.post('/signup')

module.exports = router;