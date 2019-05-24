## 请求头
一次http事务有：
    - 请求 
        请求头 空行 请求体
        content-type:规定我们向服务端返送请求体的格式
        1. application/x-www-form-urlencoded
            form 表单默认的发送请求的格式
            name=lilei&age=18
            <!-- xml -->
            <name>lihua</name>
            <age>18</age>
        2. application/json
            以json的格式发送
            {
                "name": "lihua",
                "age": 18
            }
    - 响应头 空行 响应体

    通用首部：请求/相应