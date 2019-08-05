## script
1. 下载
2. 执行
<script></script> html解析和script下载执行都是互斥的
<script async></script> html解析和script下载可以并行执行，script下载完就执行，顺序无法控制
<script defer></script> html解析和script下载可以并行执行，整个文档加载完成之后按照script在文档中出现的顺序执行

## crossorigin
用于可以引入跨域资源的标签：img, link, script
crossorigin代表要协商跨域
后端没设置Access-Control-*就会出错
1. anonymous 如果使用了这个值，会在请求头中加一个origin属性。
2. use-credentials 请求的时候带上cookie等用户验证的信息

  如果未设置cros，跨域js发生了错误，将会向window.onerror提供很少的信息，通过crossorigin属性得到详细的信息