/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return head;
    }
    let node = head;
    while (node) {
        const newNode = new Node(node.val);
        newNode.next = node.next;
        node.next = newNode;
        node = newNode.next;
    }
    node = head;
    while (node) {
        if (node.random) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }

    const result = head.next;
    let node1 = head;
    let node2 = head.next;
    while (node1) {
        node1.next = node2.next;
        if (node2.next) {
            node2.next = node2.next.next;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return result;
};
