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

function kthLargest(root: TreeNode | null, k: number): number {
    const stack:TreeNode[] = [];
    while(root){
        stack.push(root);
        root = root.right;
    }
    k--;
    while(k>0){
        const node = stack.pop()!;
        let root = node.left;
        while(root){
            stack.push(root);
            root = root.right;
        }
        k--;
    }
    return stack.pop().val;
};