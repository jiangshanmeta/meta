/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// function binarySearch(list,target){
//     let low = 0;
//     let high = list.length-1;
//     let result = 0;
//     while(low<=high){
//         const mid = (low+high) >> 1;
//         if()

//     }

// }

var verticalTraversal = function (root) {
    const resultMap = {};
    let preLevel = [
        {
            x: 0,
            node: root,
        },
    ];

    while (preLevel.length) {
        const nextLevel = [];
        const map = {};
        for (let i = 0; i < preLevel.length; i++) {
            const {
                x,
                node,
            } = preLevel[i];

            if (map[x] === undefined) {
                map[x] = [
                    node.val, ];
            } else {
                // binarysearch
                // const list = map[x];
                map[x].push(node.val);
            }

            node.left && nextLevel.push({
                x: x - 1,
                node: node.left,
            });

            node.right && nextLevel.push({
                x: x + 1,
                node: node.right,
            });
        }

        Object.keys(map).forEach((index) => {
            map[index].sort((a, b) => a - b);
            if (resultMap[index] === undefined) {
                return resultMap[index] = map[index];
            }
            resultMap[index].push(...map[index]);
        });

        preLevel = nextLevel;
    }

    return Object.keys(resultMap).sort((a, b) => a - b).map(index => resultMap[index]);
};
