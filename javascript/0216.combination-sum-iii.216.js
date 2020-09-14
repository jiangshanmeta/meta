/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    function dfs (list, index, sum, sequence) {
        if (list.length === k && sum === n) {
            return sequence.push(list.slice());
        }

        if (list.length > k || sum > n || index > 9) {
            return;
        }

        for (let i = index; i < 10; i++) {
            list.push(i);
            dfs(list, i + 1, sum + i, sequence);
            list.pop();
        }
    }
    const sequence = [];
    dfs([], 1, 0, sequence);
    return sequence;
};
