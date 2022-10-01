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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    if (!root) {
        return 0;
    }
    const findPath = (node, paths) => {
        paths.push(node);
        if (node.val === start) {
            return true;
        }
        if (node.left) {
            const rst = findPath(node.left, paths);
            if (rst) {
                return true;
            }
        }
        if (node.right) {
            const rst = findPath(node.right, paths);
            if (rst) {
                return true;
            }
        }
        paths.pop();
        return false;
    };
    const paths = [];
    findPath(root, paths);

    const set = new Set([start, ]);
    let result = 0;
    const bsf = (nodes) => {
        const ns = [];
        if (paths.length) {
            const n = paths.pop();
            set.add(n.val);
            ns.push(n);
        }
        for (const n of nodes) {
            if (n.left && !set.has(n.left.val)) {
                set.add(n.left.val);
                ns.push(n.left);
            }
            if (n.right && !set.has(n.right.val)) {
                set.add(n.right.val);
                ns.push(n.right);
            }
        }
        if (ns.length) {
            result++;
            bsf(ns);
        }
    };
    bsf([paths.pop(), ]);

    return result;
};
