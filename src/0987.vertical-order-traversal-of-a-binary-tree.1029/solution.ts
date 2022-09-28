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

function verticalTraversal (root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }
    let left = 0;
    let right = 0;
    function getBorder (root:TreeNode, index) {
        left = Math.min(left, index);
        right = Math.max(right, index);
        root.left && getBorder(root.left, index - 1);
        root.right && getBorder(root.right, index + 1);
    }
    getBorder(root, 0);
    const result:number[][] = new Array(right - left + 1);
    for (let i = 0; i < result.length; i++) {
        result[i] = [];
    }
    function bfs (levelNodes:TreeNode[], indexs:number[]) {
        const map = new Map<number, number[]>();
        const nextLevelNodes:TreeNode[] = [];
        const nextLevelIndexs:number[] = [];
        for (let i = 0; i < levelNodes.length; i++) {
            const node = levelNodes[i];
            const index = indexs[i];
            if (!map.has(index)) {
                map.set(index, []);
            }
            map.get(index).push(node.val);
            if (node.left) {
                nextLevelNodes.push(node.left);
                nextLevelIndexs.push(index - 1);
            }
            if (node.right) {
                nextLevelNodes.push(node.right);
                nextLevelIndexs.push(index + 1);
            }
        }

        for (const [index, vals, ] of map) {
            vals.sort((a, b) => a - b);
            result[index].push(...vals);
        }

        nextLevelNodes.length && bfs(nextLevelNodes, nextLevelIndexs);
    }
    bfs([root, ], [-left, ]);
    return result;
}
