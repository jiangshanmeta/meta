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

function levelOrder(root: TreeNode | null): number[] {
    if(root === null){
        return [];
    }
    const queue:TreeNode[] = [root];
    const result:number[] = [];
    let index:number = 0;
    while(index<queue.length){
        const node = queue[index++];
        result.push(node.val);
        node.left !== null && queue.push(node.left);
        node.right !== null && queue.push(node.right);
    }
    return result;
};