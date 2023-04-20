/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function replaceValueInTree (root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }
    levelTravel([root, ]);
    root.val = 0;
    return root;
}

function levelTravel (nodes:TreeNode[]) {
    const parent:TreeNode[] = [];
    const nextLevelNodes:TreeNode[] = [];
    let sum = 0;
    for (const n of nodes) {
        if (n.left) {
            parent.push(n);
            nextLevelNodes.push(n.left);
            sum += n.left.val;
        }
        if (n.right) {
            parent.push(n);
            nextLevelNodes.push(n.right);
            sum += n.right.val;
        }
    }
    let index = 0;
    while (index < nextLevelNodes.length) {
        const hasNext = index + 1 < nextLevelNodes.length && parent[index] === parent[index + 1];
        if (hasNext) {
            const a = nextLevelNodes[index].val + nextLevelNodes[index + 1].val;
            nextLevelNodes[index].val = sum - a;
            nextLevelNodes[index + 1].val = sum - a;
            index += 2;
        } else {
            nextLevelNodes[index].val = sum - nextLevelNodes[index].val;
            index++;
        }
    }

    nextLevelNodes.length && levelTravel(nextLevelNodes);
}
