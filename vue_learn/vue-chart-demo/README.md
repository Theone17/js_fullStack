- vuex 大型化 由modules支持， this.$store.user. 找到数据
- user
  state  info 登录，注册，退出
  actions
  mutations
  vuex 先设计，搭好结构 围绕着我们的状态token（令牌环）
  token this.$store.user.token 
    跳转到登陆页面
- 登录鉴权
  1. 延迟加载路由，性能优化
  