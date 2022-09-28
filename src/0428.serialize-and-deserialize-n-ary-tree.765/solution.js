/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function toJSON (root) {
    return {
        val: root.val,
        children: root.children.map(item => toJSON(item)),
    };
}

function build (obj) {
    return new Node(
        obj.val,
        obj.children.map(item => build(item))
    );
}

class Codec {
    constructor () {

    }

    /**
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function (root) {
        if (!root) {
            return '';
        }

        return JSON.stringify(build(root));
    };

    /**
     * @param {string} data
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function (data) {
        if (data === '') {
            return null;
        }
        const info = JSON.parse(data);

        return build(info);
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
