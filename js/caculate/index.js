// 年终奖  S 5  A 3  B 2  C 1  D
// level key 计算函数

let stratigies = {
    'S': function(salary) {
        return salary * 5;
    },
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    },
    'C': function(salary) {
        return salary * 1;
    }
}
function caculate(level, salary) {
    return stratigies[level](salary);
}
console.log(caculate('B', 10000));