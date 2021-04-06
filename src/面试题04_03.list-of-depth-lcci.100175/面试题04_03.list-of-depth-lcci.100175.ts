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

class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function listOfDepth (tree: TreeNode | null): Array<ListNode | null> {
    if (tree === null) {
        return [];
    }
    const result:ListNode[] = [];
    levelOrder([tree, ], result);
    return result;
}

function levelOrder (levelNodes:TreeNode[], result:ListNode[]):void {
    const dummyHead = new ListNode();
    let lastNode = dummyHead;
    const nextNodes:TreeNode[] = [];
    for (let i = 0; i < levelNodes.length; i++) {
        const node = levelNodes[i];
        lastNode.next = new ListNode(node.val);
        lastNode = lastNode.next;
        node.left !== null && nextNodes.push(node.left);
        node.right !== null && nextNodes.push(node.right);
    }
    result.push(<ListNode>dummyHead.next);
    nextNodes.length > 0 && levelOrder(nextNodes, result);
}
