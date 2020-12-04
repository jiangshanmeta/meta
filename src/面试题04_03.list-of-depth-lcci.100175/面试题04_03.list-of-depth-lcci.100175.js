/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
    if (!tree) {
        return [];
    }
    const result = [];
    levelOrder(result, [
        tree, ]);
    return result;
};

function levelOrder (result, level) {
    const dummyHead = new ListNode();
    let node = dummyHead;
    const nextLevel = [];
    for (let i = 0; i < level.length; i++) {
        const lNode = new ListNode(level[i].val);
        node.next = lNode;
        node = lNode;

        level[i].left && nextLevel.push(level[i].left);
        level[i].right && nextLevel.push(level[i].right);
    }
    result.push(dummyHead.next);
    nextLevel.length && levelOrder(result, nextLevel);
}
