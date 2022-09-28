class Node1 {
    val: number
    left: Node1 | null
    right: Node1 | null
    next: Node1 | null
    constructor (val?: number, left?: Node1, right?: Node1, next?: Node1) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = (next === undefined ? null : next);
    }
}

function connect (root: Node1 | null): Node1 | null {
    if (root === null) {
        return null;
    }
    const queen:Node1[] = [root, ];
    let start = 0;
    let end = 1;
    let index = 0;
    while (index < queen.length) {
        while (index < end) {
            if (index !== end - 1) {
                queen[index].next = queen[index + 1];
            }
            queen[index].left && queen.push(queen[index].left);
            queen[index].right && queen.push(queen[index].right);
            index++;
        }
        start = end;
        end = queen.length;
    }
    return root;
}
