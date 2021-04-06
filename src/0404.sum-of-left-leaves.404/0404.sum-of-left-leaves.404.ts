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

function sumOfLeftLeaves (root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let sum = 0;
    const nodeStack:TreeNode[] = [root, ];
    const isLeftStack:boolean[] = [false, ];
    while (nodeStack.length) {
        const node = <TreeNode>nodeStack.pop();
        const isLeft = isLeftStack.pop();

        if (node.left !== null) {
            nodeStack.push(node.left);
            isLeftStack.push(true);
        }
        if (node.right !== null) {
            nodeStack.push(node.right);
            isLeftStack.push(false);
        }
        if (node.left === null && node.right === null && isLeft) {
            sum += node.val;
        }
    }
    return sum;
}
