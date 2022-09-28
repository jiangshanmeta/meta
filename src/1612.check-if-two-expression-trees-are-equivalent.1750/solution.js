/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
var checkEquivalence = function (root1, root2) {
    const map = {};
    traversal(root1, map);
    const stack = [root2, ];
    while (stack.length) {
        const node = stack.pop();
        if (node.val !== '+') {
            if (!map[node.val]) {
                return false;
            }
            map[node.val]--;
        }

        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return Object.values(map).every(item => item === 0);
};

function traversal (root, map) {
    root.left && traversal(root.left, map);
    if (root.val !== '+') {
        if (!map[root.val]) {
            map[root.val] = 1;
        } else {
            map[root.val]++;
        }
    }
    root.right && traversal(root.right, map);
}
