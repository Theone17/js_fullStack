## Map
类似于一个js对象 {}
 Object.keys 获取对象下面的所有key
 作用：
 1. 优化逻辑判断
    if else switch-case
2. 被新的API支持 URLSearchParams

区别：
    {}的key是字符串Symbol其他类型在遍历key的时候出现toString()的问题
    app[object, HTMLelement];
    Map() key 支持各个类型