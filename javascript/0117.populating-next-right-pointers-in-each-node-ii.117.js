/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
// 与116题类似 最直接的方法是层序遍历
// 这里采用了dfs
function getNext (node) {
    if (node.left) {
        return node.left;
    }
    if (node.right) {
        return node.right;
    }
    if (node.next) {
        return getNext(node.next);
    }
    return null;
}

function helper (root) {
    if (root.left) {
        if (root.right) {
            root.left.next = root.right;
        } else if (root.next) {
            root.left.next = getNext(root.next);
        }
    }

    if (root.right) {
        if (root.next) {
            root.right.next = getNext(root.next);
        }
    }
    // 注意这里和116题dfs实现不一样 先处理右子树 再处理左子树
    // 否则左子树可能找不到next对应节点
    // 这样可以保证从上到下 从右到左populating
    root.right && helper(root.right);
    root.left && helper(root.left);
}

var connect = function (root) {
    if (!root) {
        return;
    }

    helper(root);
};
