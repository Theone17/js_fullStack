// 冒泡
// function findKthLargest(nums, k) {
//   if (k < 0 || k > nums.length - 1) return NaN;
//   return nums.sort((a, b) => b - a)[k - 1];
// }

// 快排
function findKthLargest(nums, k) {
  const arr = quick_sort(nums);
  return arr[k - 1];
}
function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [], right = [], baseDot = Math.round(arr.length / 2), base = arr.splice(baseDot, 1)[0];
  for (var i = 0; i < arr.length; i++) { // O(N)
    if (arr[i] < base) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quick_sort(left).concat([base], quick_sort(right));
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));   // 递归 O(log2N)