/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 层序遍历
var zigzagLevelOrder = function (root) {
    const result = [];
    if (root === null) {
        return result;
    }

    let curLevel = [
        root, ];
    while (true) {
        const nextLevel = [];
        const values = [];
        for (let i = 0; i < curLevel.length; i++) {
            values.push(curLevel[i].val);
            curLevel[i].left && nextLevel.push(curLevel[i].left);
            curLevel[i].right && nextLevel.push(curLevel[i].right);
        }
        result.length % 2 === 1 && values.reverse();
        result.push(values);
        if (nextLevel.length === 0) {
            return result;
        }
        curLevel = nextLevel;
    }
};
