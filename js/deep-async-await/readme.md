## Async   Await
  async 函数就是 Generator 函数的语法糖。

## Generator函数
  惰性：不能直接执行test(),test()只能生成一个对象，对象有一个{next}属性，通过调用next 一步步执行
```js
  function* test () {
    let a =  yield 1
    console.log(a)
    let b =  yield 2
    console.log(b)
    let c = yield 3
    console.log(c)
    }
```
通过g.next()一步步调用 每一步调用执行到yield 关键词  然后通过传参和作为上一个yield语句的返回值
value: 1, done: false 后面next 知道done=true结束

##next
  let a =  yield false   next是yield后面的值 也可是函数
  yield 不能返回值，返回后面的next

## Promise.resolve
返回Promise
  1. 如果是一个promise，返回promise
  2. 如果是一个值，resolve(该值)
