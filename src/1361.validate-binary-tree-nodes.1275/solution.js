/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    // 做子节点到父节点的映射
    const child2parent = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            const leftId = leftChild[i];
            // 只有一个父节点
            if (child2parent[leftId] !== -1) {
                return false;
            }
            child2parent[leftId] = i;
        }
        if (rightChild[i] !== -1) {
            const rightId = rightChild[i];
            if (child2parent[rightId] !== -1) {
                return false;
            }
            child2parent[rightId] = i;
        }
    }
    // 有且只有一个节点的父节点是空
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (child2parent[i] === -1) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }

    return count === 1;
};
