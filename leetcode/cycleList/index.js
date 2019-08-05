function ListNode(val) {
  this.val = val;
  this.next = null;
}
let n1 = new ListNode(3);
let n2 = new ListNode(2);
n1.next = n2;
let n3 = new ListNode(0);
n2.next = n3;
let n4 = new ListNode(-4);
n3.next = n4;

var hasCycle = function(head) {
  var set = new Set();
  var cur = head;
  while (cur) {
    if (set.has(cur)) {
      return true;
    } else {
      set.add(cur);
    }
    cur = cur.next;
  }
  return false;
}