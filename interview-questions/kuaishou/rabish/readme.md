- JS垃圾回收是自动的
- 回收内存
  function 局部变量
  前端特色是跨页面时
  1. 可达性 作为评判的依据
    显而易见，因为一些原因不可被删除
    - 全局变量 会污染命名空间 不会销毁
    - 当前嵌套调用链上的其他函数的变量和参数
    这些值称为根
  2. 如果引用或引用链可以从根访问任何其他值，则认为该值可访问

let user = {
  name: "John"
}
global
   |
  Object
name: "John"
user 全局变量，= 引用式赋值
  name 基础属性 -> 内部存了字符串类型的John

user = null;    // 触发一次垃圾回收

let user = {
  name: "John"
};
let admin = user;
      global
  user    admin
      Object...
user = null;