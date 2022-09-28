
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

function delNodes (root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const set = new Set(to_delete);
    const result:TreeNode[] = [];
    function postOrder (root:TreeNode|null, needAdd:boolean):TreeNode|null {
        if (!root) {
            return root;
        }
        if (set.has(root.val)) {
            postOrder(root.left, true);
            postOrder(root.right, true);
            return null;
        } else {
            needAdd && result.push(root);
            root.left = postOrder(root.left, false);
            root.right = postOrder(root.right, false);
            return root;
        }
    }
    postOrder(root, true);
    return result;
}
