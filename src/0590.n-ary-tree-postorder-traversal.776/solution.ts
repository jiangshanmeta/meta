class Node1 {
    val: number
    children: Node1[]
    constructor (val?: number) {
        this.val = (val === undefined ? 0 : val);
        this.children = [];
    }
}

function postorder (root: Node1 | null): number[] {
    if (!root) {
        return [];
    }
    const result:number[] = [];
    postOrder(root, result);
    return result;
}

function postOrder (root:Node1, result:number[]) {
    root.children.forEach((node) => {
        postOrder(node, result);
    });
    result.push(root.val);
}
