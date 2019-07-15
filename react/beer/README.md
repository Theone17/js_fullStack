- es6 class新特性
  ref = this.createRef();
  ref = {this.ref}
- history html API
  Search Main的子组件
  window.history 获取子组件的数据(不建议使用)
  hoc 高阶组件 props history
  <Route><Search /></Route>
- 高阶组件
  能返回组件的函数，接受组件作为参数，即高阶组件
  withRouter react-router-dom 可以封装一个组件并为之提供this.props.location