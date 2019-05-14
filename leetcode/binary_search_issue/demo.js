function binary_search(arr, data) {
    // 不停的二分，没得再分时停下 min > max
    let min = 0,
        max = arr.length - 1,
        mid;

    while (min <= max) {
        // mid = parseInt((min + max) / 2);
        // mid = min + parseInt((max - min) / 2);
        mid = min + ((max - min) >> 1);
        if (arr[mid] > data) {
            // 左边一半
            max = mid - 1;
        } else if (arr[mid] < data) {
            min = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// console.log(binary_search([1,4,7,9,10,12], 11));

let arr = [];
for (let i = 0; i < 100000000; i++) {
    arr.push[i];
}
console.log(binary_search(arr, 2019));