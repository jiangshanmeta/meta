class Node1 {
    val: number
    left: Node1 | null
    right: Node1 | null
    next: Node1 | null
    constructor(val?: number, left?: Node1, right?: Node1, next?: Node1) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}


function connect(root: Node1 | null): Node1 | null {
    if(root === null){
        return null;
    }
    if(root.left){
        root.left.next = root.right;
    }
    if(root.next && root.right){
        root.right.next = root.next.left;
    }
    connect(root.right);
    connect(root.left);
    return root;
};