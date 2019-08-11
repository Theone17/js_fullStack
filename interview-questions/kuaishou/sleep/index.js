// 实现一个功能 + 发散理解

// const sleep = time => {
//   return new Promise((resolve, reject) => setTimeout(resolve, time));
// }
// sleep(3000).then(() => {
//   console.log('3秒');
// })

// 生成器函数
// function *sleepGenerator(time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
//   console.log('aaa');
// }
// sleepGenerator(1000).next().value.then(() => {
//   console.log('1秒');
// })

// console.log(sleepGenerator().next());

// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }
// async function output() {
//   let out = await sleep(1000);
//   console.log('1秒');
//   return out;
// }
// output();

function sleep(callback, time) {
  if (typeof callback === 'function') {
    setTimeout(callback, time);
  }
}
sleep(function() {
  console.log('1秒');
}, 1000)