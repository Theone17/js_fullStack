function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // 找到中间值
  var left = [], right = [], baseDot = Math.round(arr.length / 2), base = arr.splice(baseDot, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // left a   base 中间值   right c
  return quickSort(left).concat([base], quickSort(right));
}

const arr = [8, 2, 5, 9, 7];
console.log(quickSort(arr));