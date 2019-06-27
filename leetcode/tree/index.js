function TreeNode(val) {
  this.val = val;
  this.right = this.left = null;
}

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

function levelOrderTraversal(root) {
  if (!root) {
    return [];
  }
  const item = [];    // 存放所有的节点，返回的结果
  const queue = [root, null];   // 当前所在处理层的队列
  let levelNodes = [];    // 每层的节点

  while(queue.length > 0) {
    const t = queue.shift();
    if (t) {
      // 真实的节点
      levelNodes.push(t.val);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    } else {
      // null, 层与层之间的分界符
      item.push(levelNodes);
      levelNodes = [];
      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }
  return item;
}