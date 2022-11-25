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
// 二叉树节点数量为N queries长度为M
// 该实现时间复杂度为 O(N+MlogM)
// 也可以不排序独立处理每个queries 时间复杂度为 O(N+MlogN)
function closestNodes (root: TreeNode | null, queries: number[]): number[][] {
    if (!root) {
        return [];
    }
    const sequence:number[] = [];
    inOrder(root, sequence);
    const result:number[][] = [];
    const map = queries.reduce((map, item, index) => {
        if (!map.has(item)) {
            map.set(item, [index, ]);
        } else {
            map.get(item).push(index);
        }
        return map;
    }, new Map<number, number[]>());
    queries.sort((a, b) => a - b);
    let index = 0;

    for (let i = 0; i < queries.length; i++) {
        if (i > 0 && queries[i] === queries[i - 1]) {
            continue;
        }
        const query = queries[i];
        while (index < sequence.length && sequence[index] < query) {
            index++;
        }
        let item:number[] = [];
        if (index === sequence.length) {
            item = [sequence[index - 1], -1, ];
        } else if (sequence[index] === query) {
            item = [query, query, ];
        } else if (index === 0) {
            item = [-1, sequence[index], ];
        } else {
            item = [sequence[index - 1], sequence[index], ];
        }
        for (const j of map.get(query)) {
            result[j] = item;
        }
    }

    return result;
}

function inOrder (root:TreeNode, path:number[]) {
    if (root.left) {
        inOrder(root.left, path);
    }
    path.push(root.val);
    if (root.right) {
        inOrder(root.right, path);
    }
}
