function ListNode(val) {
  this.val = val;
  this.next = null;
}
let n1 = new ListNode(1);
let n2 = new ListNode(2);
n1.next = n2;
let n3 = new ListNode(3);
n2.next = n3;
let n4 = new ListNode(4);
n3.next = n4;
let n5 = new ListNode(5);
n4.next = n5;

var reverseList = function(head) {
  var cur = head, prev = null;
  while (cur) {
    var temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};
let node = reverseList(n1);
while(node) {
    console.log(node.val);
    node = node.next;
}