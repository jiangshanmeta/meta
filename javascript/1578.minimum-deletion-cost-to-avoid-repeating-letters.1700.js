/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
    let result = 0;
    let index = 0;
    while (index < s.length) {
        let c = cost[index];
        let max = c;
        const char = s[index++];
        while (index < s.length && s[index] === char) {
            c += cost[index];
            max = Math.max(max, cost[index]);
            index++;
        }
        result += c - max;
    }
    return result;
};
