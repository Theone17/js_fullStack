//数组是最廉价的数据结构
let enc_qq=[6,3,1,7,5,8,9,2,4],
 qq=[];      //真正的
 head=0,     //队首指针，要移除的元素位置
 tail=9;     //队尾指针，要加入的元素位置

while(head<tail){
    //  第一个数移除
    qq.push(enc_qq[head]);
    head++;
    //第二个数移到最后
    enc_qq[tail]=enc_qq[head];
    tail++;
    head++;
    // enc_qq.shift();
    console.log(typeof qq);     //类型运算符，可以获得一个变量的类型
}

// enc_qq.shift();     //在头部移除一个下标为0的数字
// console.log(enc_qq);

// enc_qq.unshift(0);   //移除头部的数字
// console.log(enc_qq);

// enc_qq.pop();        //
// console.log(enc_qq);

// enc_qq.push(0);     //数组队尾添加一个数字
// console.log(enc_qq);
//字符串是字符集合
//console.log(enc_qq.length,enc_qq[0]);
