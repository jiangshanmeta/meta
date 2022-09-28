
class Node1 {
    val: number
    left: Node1 | null
    right: Node1 | null
    parent: Node1 | null
    constructor (val?: number, left?: Node1 | null, right?: Node1 | null, parent?: Node1 | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.parent = (parent === undefined ? null : parent);
    }
}

function inorderSuccessor (node: Node1 | null): Node1 | null {
    if (!node) {
        return node;
    }
    if (node.right) {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    } else {
        let parent = node.parent;
        while (parent && parent.left !== node) {
            parent = parent.parent;
            node = node.parent;
        }
        return parent;
    }
}
