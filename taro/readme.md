- 小程序为什么要框架？
  原生写小程序有组件化，但是语法很怪，vue react开发者学习成本高
  taro(react) mpvue(vue)让开发者不用学小程序就可以写了
  命令行工具可以安装一堆的npm包，极大的扩展了小程序的功能
  compile src -> dist/

- JSX 
  XML in JS, react template的新语法
  JSX -> babel -> preset/react -> JS
  render (
    return (

    )
  )

  react没有v-for v-if指令
  原生写
  <view>
    {
      this.data.list.map((item, index) => {
        return (
          ...
        )
      })
    }
  </view>