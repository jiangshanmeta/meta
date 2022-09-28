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

function pathSum (root: TreeNode | null, sum: number): number[][] {
    if (root === null) {
        return [];
    }
    const result:number[][] = [];
    dfs(root, sum, [], result);
    return result;
}

function dfs (root:TreeNode, rest:number, path:number[], result:number[][]):void {
    rest -= root.val;
    path.push(root.val);
    if (root.left === null && root.right === null && rest === 0) {
        result.push(path.slice());
    }
    root.left !== null && dfs(root.left, rest, path, result);
    root.right !== null && dfs(root.right, rest, path, result);
    path.pop();
}
