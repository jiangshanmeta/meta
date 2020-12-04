/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    // 先找到从target到根节点的一个序列
    // 其实从根节点到target也行
    const sequence = [];
    function dfs (root, target, sequence) {
        if (!root) {
            return false;
        }

        if (root === target) {
            sequence.push(root);
            return true;
        }

        if (dfs(root.left, target, sequence)) {
            sequence.push(root);
            return true;
        }

        if (dfs(root.right, target, sequence)) {
            sequence.push(root);
            return true;
        }

        return false;
    }

    dfs(root, target, sequence);

    // 从node节点开始向下查找
    const rst = [];
    function dfs2 (node, distance, target, sequence) {
        if (!node) {
            return;
        }

        if (distance === target) {
            return sequence.push(node.val);
        }

        dfs2(node.left, distance + 1, target, sequence);
        dfs2(node.right, distance + 1, target, sequence);
    }
    // 从target向下找
    dfs2(target, 0, K, rst);
    // 找其他分支的
    for (let i = 1; i < sequence.length; i++) {
        if (K === i) {
            rst.push(sequence[i].val);
            break;
        }
        // 判断其他分支
        if (sequence[i].left === sequence[i - 1]) {
            dfs2(sequence[i].right, i + 1, K, rst);
        } else {
            dfs2(sequence[i].left, i + 1, K, rst);
        }
    }

    return rst;
};
