对es6的理解
  es6相对于es5 ECMAScript的第六次修订 ES2015
  随着babel webpack等构建工具的成熟，es6已成为js编程的事实标准。
  我认为es6比es5更加简洁，提高了开发效率，让js代码更优雅。

- 新增的特性
  let变量和const常量声明具有var没有的块级作用域，比如循环事件监听时，闭包就不需要了，让代码更好理解。
  var有变量提升的能力，但是let const不会到顶级对象去，使用的变量或常量一定要声明
- 箭头函数
  简化了函数的表达形式
  1. 不用function关键字 () => { }
  2. 如果只有一个参数，()也可以省略
  3. 如果代码直接返回，{}也可以省略，右侧的代码就是返回值
  4. 有效的规避了this丢失的问题，箭头函数里的this指向上一级

- 模板字符串
  增强版的字符串，用``云括号，他的多行表达方式特别适合react jsx template的书写
  DOM或HTML模板的构建更加优雅

- 解构赋值
  可解，spread 可合， reset 从对象或数组中提取值，对变量进行赋值，提高开发效率

- for of 循环
  for 计步，对数组友好，但是对象， Set Map类数组以及字符串都可以遍历

- Set es6新增的数据结构，类似数组。唯一的，没有重复的值

- import export es6的模块化，是es6原生支持的module，将js代码分割成不同的小块独立开发，一个文件一个类，一个独立的模块，比如  说utils api

- ... 展开运算符

- 终于支持原生的class关键字了，让js有了传统面向对象的写法，支持extends，不过他只是语法糖，底层还是基于原型的面向对象

- Promise为js提供了异步解决方案，规避了回调地狱(then) 代码的书写和执行是一样的

- 更棒的异步解决方案 es7的async await
  koa就是基于async await 快速取代了express的江湖地位

- vue react 响应式编程以来的proxy defineProperty 监听对象的改变做一些事情

- es6提供了新的数据类型，Symbol