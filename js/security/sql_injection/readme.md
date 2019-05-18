攻防
攻：SQL 前端SQL是什么？
    前端处理着表单，SQL 
    攻击者就是带着目的来的，SQL 输入字符串 有可能带来SQL的麻烦
    表单->onsubmit->/login POST {email:'user@email.com', password:'123456'}-> SQL拼接
    select * from users WHERE email='user@email.com' and password='123456';

怎么录入进银行账号把钱拿走
    登录进去 账号、密码是不知道的
    SQL 一种是破坏SQL语法，导致服务器挂了
        还有一种是窃取账户 ' or  1=1--

session 