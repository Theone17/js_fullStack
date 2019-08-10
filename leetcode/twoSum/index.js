var twoSum = function(nums, target) {
  // 方法一
  // var index = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let cur = nums[i];
  //   for (let j = i + 1; j < nums.length; j++) {
  //     let next = nums[j];
  //     if (cur + next === target) {
  //       index.push(i, j);
  //     }
  //   }
  // }
  // return index;

  // 方法二：map
  // 优化if else
  // var numMap = {
      // '2': 0,
      // '7': 1,
      // '11': 2,
      // '15': 3
  // }
  // Set:无重复的数据集
  // 给所有数建立map
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let anotherNum = target - cur;
    if (obj[anotherNum] !== undefined && obj[anotherNum] !== i) {
      return [i, obj[anotherNum]];
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   let res = target - nums[i];
  //   if (nums.indexOf(res) > -1 && res !== nums[i]) {
  //     return [i, nums.indexOf(res)];
  //   }
  // }
}

console.log(twoSum([2, 7, 11, 15], 9));