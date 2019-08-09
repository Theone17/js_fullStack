## 技能思路

- 购物车
  Goods > GoodsItem
  核心：共享数据 在库存共享 -> 购物车
- 组件让我们从容的进行页面划分
- vuex data(组件私有) 不适合放共享数据，props父子组件传值，但是event bus不如vuex
  computed数据从中央到地方的连接点
- 
  store状态树下的分支module(products.all)为[]
  mapState({ products: state => state.all })

  all <- mutation <- action发送axios请求(后端api数据)
  modules对应的处理：state.products.all
  dispatch('products/getAllProducts') -> action -> api -> mutation -> state -> MVVM -> 界面 vuex的开发套路
  methods => mapActions
  this.$store.dispatch()