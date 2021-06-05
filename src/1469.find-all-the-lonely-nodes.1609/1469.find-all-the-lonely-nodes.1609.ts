
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

function getLonelyNodes (root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    const result:number[] = [];
    function dfs (root:TreeNode, isLonely:boolean) {
        if (isLonely) {
            result.push(root.val);
        }
        if (root.left && root.right) {
            dfs(root.left, false);
            dfs(root.right, false);
        } else if (root.left) {
            dfs(root.left, true);
        } else if (root.right) {
            dfs(root.right, true);
        }
    }
    dfs(root, false);

    return result;
}
