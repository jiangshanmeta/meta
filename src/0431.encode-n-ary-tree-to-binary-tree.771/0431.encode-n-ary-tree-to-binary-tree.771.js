/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function encode2TreeNode (root, siblings, nextSibingIndex) {
    const node = new TreeNode(root.val);
    if (nextSibingIndex !== siblings.length) {
        node.right = encode2TreeNode(siblings[nextSibingIndex++], siblings, nextSibingIndex);
    }
    if (root.children.length) {
        node.left = encode2TreeNode(root.children[0], root.children, 1);
    }

    return node;
}

function decode2Node (root, seq) {
    const node = new Node(root.val);
    if (!node.children) {
        node.children = [];
    }
    seq.push(node);
    if (root.right) {
        decode2Node(root.right, seq);
    }
    if (root.left) {
        decode2Node(root.left, node.children);
    }

    return node;
}

class Codec {
    constructor () {
    }

    /**
     * @param {Node} root
     * @return {TreeNode}
     */
    // Encodes an n-ary tree to a binary tree.
    encode = function (root) {
        if (!root) {
            return root;
        }
        return encode2TreeNode(root, [], 0);
    };

    /**
     * @param {TreeNode} root
     * @return {Node}
     */
    // Decodes your binary tree to an n-ary tree.
    decode = function (root) {
        if (!root) {
            return root;
        }
        return decode2Node(root, []);
    };
}

/*
* Your Codec object will be instantiated and called as such:
* codec = Codec()
* codec.decode(codec.encode(root))
*/
