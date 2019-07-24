// function Person(name) {
//   this.name = name;
// }
// let p = new Person('xbin');
// /**
//  * 1. p.__proto__ == Person.prototype
//  * 2. Person.__proto__ == Function.prototype
//  * 实例的隐式原型链__proto__等于其构造函数的显式原型链prototype
//  */
// var foo = {},
//   F = function() {};

// Object.prototype.a = 'valA';
// Function.prototype.b = 'valB';
// console.log(foo.a);
// console.log(foo.b);
// console.log(F.a);
// console.log(F.b);

function Person(name) {
  this.name = name;
  return 666;
}
let p = new Person('xbin');
// console.log(p);
// 构造函数是不需要返回值的，使用new来创建对象时，如果return的是非对象类型，会忽略返回值。
// 如果return的是对象，则返回该对象（若return null也会忽略返回值）

function Person(name) {
  this.name = name;
}
function Student() {

}
Student.prototype = Person.prototype;
Student.prototype.constructor = Student;

// let s = new Student('xbin');
// console.log(s instanceof Person);

// var和let区别
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0)
// }
// 闭包的方法
for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(() => {
      // console.log(i);
    }, 0)
  })(i)
}
// let每次循环会生成一个封闭的作用域和setTimeout绑定，var每次循环会覆盖掉上一次的作用域

// for .. in 和 for .. of 区别
// Array.prototype.method = function() {
//   console.log('bin');
// }
// var myArr = [1, 2, 3, 4, 5, 6, 7];
// myArr.name = 'bin';
// for (let index of myArr) {
//   console.log(index);
// }
/**
 * for .. in 遍历的是数组的索引
 * 1. index索引为字符串的数字，不能直接进行几何运算
 * 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
 * 3. 使用for in 会遍历数组所有可枚举属性，包括原型链，所以for in 更适合遍历对象
 * for .. of 遍历的是数组的元素，遍历的只是数组内的元素，而不包括数组原型属性和索引
 */

let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]];
let oArr = [1, 2, 3, 4, 5, 2, 7, 3, 9];
// function outputArr(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item);
  }, [])
}
console.log(outputArr(gArr));