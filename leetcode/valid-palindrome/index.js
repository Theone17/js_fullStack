// 'aba'
// function isPalindrome(str) {
//   if (!str || typeof str != 'string') return false;
//   return str.split("").reverse().join("") === str;
// }

var isValidChar = function(c) {
  return /^[\w]$/.test(c);
}
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }
    if (!isValidChar(s[right])) {
      right--;
      continue;
    }
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left;
}

console.log(isPalindrome('aba'));