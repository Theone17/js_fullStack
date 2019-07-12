function bubbleSort(arr) {
  var len = arr.length;
  var temp;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
				temp = arr[j];
    		arr[j] = arr[j+1];
    		arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const arr = [8, 2, 5, 9, 7];
console.log(bubbleSort(arr));