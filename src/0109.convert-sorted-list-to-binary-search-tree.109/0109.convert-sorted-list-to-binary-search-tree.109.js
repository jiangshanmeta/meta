/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function divideConquer (head) {
    if (head === null) {
        return null;
    }
    let slow = head;
    let fast = head.next;
    let prev;
    // 找到链表的中点，prev是中点的前一个元素
    // 方法同 leetcode 876
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // 根据中点将链表分为两部分，分别构成左子树和右子树
    const node = new TreeNode(slow.val);
    node.right = divideConquer(slow.next);
    // 处理中点就是第一个元素的特殊情况，只有1或2个元素时会遇到
    if (prev) {
        prev.next = null;
        node.left = divideConquer(head);
    }
    return node;
}

var sortedListToBST = function (head) {
    if (head === null) {
        return head;
    }
    return divideConquer(head);
};
