class Node1 {
    val: number
    children: Node1[]
    constructor (val?: number) {
        this.val = (val === undefined ? 0 : val);
        this.children = [];
    }
}

function preorder (root: Node1 | null): number[] {
    if (!root) {
        return [];
    }
    const stack:Node1[] = [root, ];
    const result:number[] = [];
    while (stack.length) {
        const node = stack.pop()!;
        result.push(node.val);
        for (let i = node.children.length - 1; i > -1; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
}
