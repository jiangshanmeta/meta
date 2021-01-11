class Node1 {
    val: number
    left: Node1 | null
    right: Node1 | null
    next: Node1 | null
    children:Node1[]
    constructor(val?: number, left?: Node1, right?: Node1, next?: Node1) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

function maxDepth(root: Node1): number {
    if(!root){
        return 0;
    }
    return Math.max(
        0,
        ...root.children.map((node)=>maxDepth(node))
    )+1
};