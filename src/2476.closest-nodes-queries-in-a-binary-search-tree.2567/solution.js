/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
    const sequence = [];
    inOrder(root, sequence);
    const map = new Map();
    for (let i = 0; i < queries.length; i++) {
        if (!map.has(queries[i])) {
            map.set(queries[i], [i, ]);
        } else {
            map.get(queries[i]).push(i);
        }
    }
    queries.sort((a, b) => a - b);
    let index = 0;
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        if (i > 0 && queries[i] === queries[i - 1]) {
            continue;
        }
        const query = queries[i];
        while (index < sequence.length && sequence[index] < query) {
            index++;
        }
        let item = [];
        if (index === sequence.length) {
            item = [sequence[index - 1], -1, ];
        } else if (sequence[index] === query) {
            item = [query, query, ];
        } else if (index === 0) {
            item = [-1, sequence[index], ];
        } else {
            item = [sequence[index - 1], sequence[index], ];
        }
        const indexs = map.get(query);
        for (const j of indexs) {
            result[j] = item;
        }
    }

    return result;
};

function inOrder (root, result) {
    if (root.left) {
        inOrder(root.left, result);
    }
    result.push(root.val);
    if (root.right) {
        inOrder(root.right, result);
    }
}
