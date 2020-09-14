/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const newHead = new ListNode();
    newHead.next = head;

    let nodeFront = newHead;
    let nodeLast = newHead;

    // 让nodeFront和nodeEnd相隔n个节点
    let counter = 0;
    while (counter < n) {
        counter++;
        nodeFront = nodeFront.next;
    }

    // 两个同时向后移动，当nodeFront是最后一个节点时，nodeEnd是要删除的节点的前一个节点
    while (nodeFront.next) {
        nodeFront = nodeFront.next;
        nodeLast = nodeLast.next;
    }

    const nextNode = nodeLast.next;
    nodeLast.next = nextNode.next;
    nextNode.next = null;

    return newHead.next;
};

// 思路1
// 先遍历一遍，找到总共有几个节点，就可以确定要删除的是第几个节点了
// 时间复杂度是O(n)

// 思路2
// 两个指针，一个在前一个在后，两个相隔n个节点
// 两个指针同时向后移动
// 当前面的节点是最后一个节点时，后面的节点是被删除节点的前一个节点
