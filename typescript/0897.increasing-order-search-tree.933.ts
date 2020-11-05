class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function increasingBST(root: TreeNode | null): TreeNode | null {
    if(root === null){
        return null;
    }
    root.right = increasingBST(root.right);
    if(root.left === null){
        return root;
    }else{
        const newRoot = <TreeNode>increasingBST(root.left);
        root.left = null;
        let node = newRoot;
        while(node.right !== null){
            node = node.right;
        }
        node.right = root;
        return newRoot
    }
};