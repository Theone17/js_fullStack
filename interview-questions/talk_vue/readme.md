# 基于vue2.0 + vuex + VueRouter 全家桶实现方案来模拟网易云音乐WebApp项目 CSS预编译工具使用的是Sass，音乐上下滚动加载用的是berrterscore，全面采用es6风格代码

解决了哪些问题？
  - 图片懒加载 vue-lazyload
  - 前后端分离
    使用node.js NeteaseCloudMusicAPI proxy 前端：80880 后端：3000
  - fastclick 解决移动端点击后出现的300ms延迟
  - 设计了store
    songs  index song 当前播放的歌曲 singer mode播放模式 favoriteList searchHistory playHistory
  - iconfont
  - eslint

  - vue项目，分析清楚目录结构
    1. components/ 跟路由挂钩 工作的路口
    2. store/ 全局共享 分模块 了解关键状态
    3. common/ 公共组件不用写
    4. api/ 前后端的协作方式
