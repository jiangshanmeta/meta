class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function maxLevelSum (root: TreeNode | null): number {
    const levelSums = [0, ];
    function dfs (root:TreeNode|null, level:number) {
        if (root === null) {
            return;
        }
        if (level === levelSums.length) {
            levelSums.push(0);
        }
        levelSums[level] += root.val;
        level++;
        dfs(root.left, level);
        dfs(root.right, level);
    }
    dfs(root, 1);
    let result = 1;
    let maxSum = levelSums[1];
    for (let i = 2; i < levelSums.length; i++) {
        if (levelSums[i] > maxSum) {
            result = i;
            maxSum = levelSums[i];
        }
    }
    return result;
}
