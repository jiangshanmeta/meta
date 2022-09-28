
function levelOrder (root: Node | null): number[][] {
    if (!root) {
        return [];
    }
    const result:number[][] = [];
    traversal([root, ], result);
    return result;
}

function traversal (levelNodes:Node[], result:number[][]) {
    const vals:number[] = [];
    const nextLevelNodes:Node[] = [];
    for (let i = 0; i < levelNodes.length; i++) {
        vals.push(levelNodes[i].val);
        nextLevelNodes.push(...levelNodes[i].children);
    }
    result.push(vals);
    nextLevelNodes.length && traversal(nextLevelNodes, result);
}
