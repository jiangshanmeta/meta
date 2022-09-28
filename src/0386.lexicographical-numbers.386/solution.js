/**
 * @param {number} n
 * @return {number[]}
 */
// 这真的是dfs
// 第0层是1-9 向下拓展每一个节点都有0-9共10个直接子节点
var lexicalOrder = function (n) {
    const result = [];
    function dfs (base, sequence) {
        if (base > n) {
            return;
        }
        for (let i = 0; i < 10; i++) {
            if (base + i > n) {
                break;
            }
            sequence.push(base + i);
            dfs((base + i) * 10, sequence);
        }
    }

    for (let i = 1; i < Math.min(10, n + 1); i++) {
        result.push(i);
        dfs(i * 10, result);
    }

    return result;
};
