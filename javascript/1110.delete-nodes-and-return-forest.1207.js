/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    // to_delete转换为Hash 方便查询
    const toDeleteMap = to_delete.reduce((obj, item) => {
        obj[item] = true;
        return obj;
    }, {});

    const result = [];

    function dfs (root, parentDeleted) {
        // 当前节点需要被删
        if (toDeleteMap[root.val]) {
            root.left && dfs(root.left, true);
            root.right && dfs(root.right, true);
            return null;
        } else {
            // 当前节点需要保留
            // 父节点被删 当前节点保留 形成新的根节点
            parentDeleted && result.push(root);
            root.left && (root.left = dfs(root.left, false));
            root.right && (root.right = dfs(root.right, false));
            return root;
        }
    }
    dfs(root, true);
    return result;
};
