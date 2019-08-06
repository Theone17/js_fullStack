var arr = [1, 2, 1, 1, '1'];

function unique(arr) {
  var res = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })
  return res;
}
console.log(unique(arr));