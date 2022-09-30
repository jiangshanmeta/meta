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

function reverseOddLevels (root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }
    const bfs = (nodes:TreeNode[], level:number) => {
        const nextLevels:TreeNode[] = [];
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].left) {
                nextLevels.push(nodes[i].left);
            }
            if (nodes[i].right) {
                nextLevels.push(nodes[i].right);
            }
        }
        if (level % 2 === 1) {
            nodes.reverse();
        }

        if (nextLevels.length) {
            bfs(nextLevels, level + 1);
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].left = nextLevels[2 * i];
                nodes[i].right = nextLevels[2 * i + 1];
            }
        }
    };
    bfs([root, ], 0);

    return root;
}
