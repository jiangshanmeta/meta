/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function (root) {
    let parents = [];
    let nodes = [];
    if (root.left) {
        nodes.push(root.left);
        parents.push(root);
    }
    if (root.right) {
        nodes.push(root.right);
        parents.push(root);
    }
    let found = false;
    while (!found) {
        const set = new Set();
        const nNodes = [];
        const nParents = [];

        for (let i = nodes.length - 1; i > -1; i--) {
            const node = nodes[i];
            if (node.right && set.has(node.right.val)) {
                found = true;
                const parent = parents[i];
                if (node === parent.left) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
                break;
            }
            set.add(node.val);
            if (node.right) {
                nParents.push(node);
                nNodes.push(node.right);
            }
            if (node.left) {
                nParents.push(node);
                nNodes.push(node.left);
            }
        }

        nodes = nNodes.reverse();
        parents = nParents.reverse();
    }

    return root;
};
