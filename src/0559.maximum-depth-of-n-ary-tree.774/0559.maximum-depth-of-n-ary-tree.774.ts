class Node1 {
    val: number
    children: Node1[]
    constructor (val?: number) {
        this.val = (val === undefined ? 0 : val);
        this.children = [];
    }
}

function maxDepth (root: Node1): number {
    if (!root) {
        return 0;
    }
    return Math.max(
        0,
        ...root.children.map((node) => maxDepth(node))
    ) + 1;
}
