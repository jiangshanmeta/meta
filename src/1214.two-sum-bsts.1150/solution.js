/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
    if (!root1 || !root2) {
        return false;
    }
    // 都转成hash
    const map1 = {};
    const map2 = {};
    traversal(root1, map1);
    traversal(root2, map2);
    const keys = Object.keys(map1);
    for (let i = 0; i < keys.length; i++) {
        // 在另一个hash中查找
        if (map2[target - keys[i]]) {
            return true;
        }
    }
    return false;
};

function traversal (root, map) {
    root.left && traversal(root.left, map);
    map[root.val] = true;
    root.right && traversal(root.right, map);
}
