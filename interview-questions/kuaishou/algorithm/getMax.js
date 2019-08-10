var str = 'abcdeffggghhhhiiiii';
function getMax(str) {
  let hash = {}, max = 0, maxStr;  // 哈希表
  for (let i = 0; i < str.length; i++) {
    // hash有i吗？有加1，没有设置为1
    let char = str[i];
    if (!hash[char]) {
      // 没有
      hash[char] = 1;
    } else {
      hash[char]++;
    }
    if (hash[char] > max) {
      max = hash[char];
      maxStr = char;
    }
  }
  return maxStr;
}

console.log(getMax(str));