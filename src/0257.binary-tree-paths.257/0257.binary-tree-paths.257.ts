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

function binaryTreePaths (root: TreeNode | null): string[] {
    if (root === null) {
        return [];
    }
    const result:string[] = [];
    dfs(root, [], result);
    return result;
}

function dfs (root:TreeNode, path:number[], result:string[]):void {
    path.push(root.val);
    if (root.left === null && root.right === null) {
        result.push(path.join('->'));
    }
    root.left !== null && dfs(root.left, path, result);
    root.right !== null && dfs(root.right, path, result);
    path.pop();
}
