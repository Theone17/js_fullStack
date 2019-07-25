## Concurrent mode
  以前async mode，现在的concurrent mode
  目的：让react整体渲染有一个优先级的排比
  1. js是单线程的
  2. 浏览器是多线程
    a. UI渲染线程
    b. js解析
    c. http请求
  3. js线程和UI是互斥的，js可以操作DOM
  4. 卡顿的产生，js执行占据了很大的空间，导致UI得不到响应