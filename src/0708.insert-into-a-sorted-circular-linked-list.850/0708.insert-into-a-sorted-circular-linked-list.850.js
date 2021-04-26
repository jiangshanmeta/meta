/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    if (!head) {
        const root = new Node(insertVal);
        root.next = root;
        return root;
    }
    let maxNode = head;
    let minNode = head;
    let node = head.next;
    const root = new Node(insertVal);
    while (node !== head) {
        if (node.val >= maxNode.val) {
            maxNode = node;
        }
        if (node.val < minNode.val) {
            minNode = node;
        }
        node = node.next;
    }
    if (insertVal >= maxNode.val || insertVal <= minNode.val) {
        maxNode.next = root;
        root.next = minNode;
    } else {
        let prev = minNode;
        let current = minNode.next;
        while (current.val < insertVal) {
            current = current.next;
            prev = prev.next;
        }
        prev.next = root;
        root.next = current;
    }

    return head;
};
