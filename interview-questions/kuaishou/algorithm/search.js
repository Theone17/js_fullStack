// [1, 2, 3, 4, 5, 6] 2

// 排序 已排序
function binarySearch(arr, data) {
  var start = 0, end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((end - start) / 2);
    if (arr[mid] < data) {
      start = mid + 1;
    } else if (arr[mid] > data) {
      end = mid - 1;
    }
    return mid;
  }
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr, 2));