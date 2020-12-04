/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 找到每一层的平均值
// 最直接的实现是层序遍历(BFS)
// 其实DFS也行
function getLevelSequence (nodes, sequences) {
    const values = [];
    const nextLevelNodes = nodes.reduce((arr, node) => {
        values.push(node.val);
        node.left && arr.push(node.left);
        node.right && arr.push(node.right);
        return arr;
    }, []);

    sequences.push(values.reduce((sum, val) => {
        sum += val;
        return sum;
    }, 0) / nodes.length);

    if (nextLevelNodes.length) {
        return getLevelSequence(nextLevelNodes, sequences);
    }
}

var averageOfLevels = function (root) {
    const firstLevelNodes = [
        root, ];
    const sequences = [];
    getLevelSequence(firstLevelNodes, sequences);
    return sequences;
};
