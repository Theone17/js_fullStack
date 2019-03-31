# 清除浮动的几种方法：
1. 在父元素底部加上一行代码 <div style="clear:left/right/both"></div>
2. 给父元素CSS添加一个浮动float:left
3. 添加一个伪类after,给父元素div添加一个clearFix的class类
    .clearFix::after{
        content: "";
        clear: both;
        display: block;
        /* height: 0;
        visibility: hidden; */
    }
4. 利用BFC（块级格式化上下文）的效果来弥补父容器的高度塌陷
    div.content{
        overflow:hidden/auto/scroll;
    }
    scroll会添加滚动条
5. 尼古拉斯大师方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果
    .content{
        display:table;
    }
    最不推荐使用