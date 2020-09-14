/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 我们从node节点看起 如果node节点的父节点被偷了 那么这个节点就不能偷
// 如果node节点的父节点没有被偷 那么这个节点可以偷 也可以被偷
var rob = function (root) {
    // 缓存
    const cache = {};
    // flag表示父节点是否被偷 true=>父节点被偷 false=>子节点没有被偷
    // 缓存利用二叉树节点的索引 (按照完全二叉树的索引来)
    function postOrder (node, flag, index) {
        if (!node) {
            return 0;
        }
        if (!cache[index]) {
            cache[index] = {};
        }

        const cacheInfo = cache[index];

        if (cacheInfo[flag] === undefined) {
            if (flag) {
                cacheInfo.true = postOrder(node.left, false, 2 * index) + postOrder(node.right, false, 2 * index + 1);
            } else {
                if (cacheInfo.true === undefined) {
                    cacheInfo.true = postOrder(node.left, false, 2 * index) + postOrder(node.right, false, 2 * index + 1);
                }
                cacheInfo.false = Math.max(
                    node.val + postOrder(node.left, true, 2 * index) + postOrder(node.right, true, 2 * index + 1),
                    cacheInfo.true
                );
            }
        }
        return cacheInfo[flag];
    }
    return postOrder(root, false, 1);
};
