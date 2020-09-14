/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

//  判断是否是同一棵树
function isSameTree (node1, node2) {
    if (node1 && node2) {
        return node1.val === node2.val && isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
    }

    if (!node1 && !node2) {
        return true;
    }
    return false;
}

var findDuplicateSubtrees = function (root) {
    const map = {};

    // 先进行聚合
    // 这个实现聚合分了两层 第一层是根节点的值 第二层是节点数 可以减少一部分比较
    function dfs (node) {
        if (!node) {
            return 0;
        }

        const leftNodes = dfs(node.left);
        const rightNodes = dfs(node.right);
        const nodeCount = leftNodes + rightNodes + 1;
        const val = node.val;

        if (map[val] === undefined) {
            map[val] = {};
        }

        if (map[val][nodeCount] === undefined) {
            map[val][nodeCount] = [];
        }
        map[val][nodeCount].push(node);
        return nodeCount;
    }

    dfs(root);

    const rst = [];

    Object.keys(map).forEach((rootVal) => {
        const subMap = map[rootVal];
        Object.keys(subMap).forEach((nodeCount) => {
            // arr中的树根节点一致 子节点数量相同
            const arr = subMap[nodeCount];

            while (arr.length > 1) {
                const indexs = [
                    0, ];
                const node0 = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (isSameTree(node0, arr[i])) {
                        indexs.push(i);
                    }
                }

                if (indexs.length > 1) {
                    rst.push(node0);
                }
                // 把这一组从数组中去掉
                for (let i = indexs.length - 1; i >= 0; i--) {
                    arr.splice(indexs[i], 1);
                }
            }
        });
    });

    return rst;
};
