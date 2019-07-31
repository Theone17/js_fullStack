1. 三个容器 背后 100%宽度 拖拽的圆点 已经拖了的进度条
2. touchStart touchMove touchend
3. 拖拽时改变width left

```js
new Progress('selector', {
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5,    // 指定初始进度条是多少
  disableDrag: false
})
```