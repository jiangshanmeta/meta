/**
 * @param {number} n
 * @return {number}
 */
// 如果一个数不是平方数，则最终一定是off的
// 例如 12 =2*6=3*4 2和6相互抵消，3和4相互抵消，只剩下12自己关掉
// 4是平方数 其根2不能被自己抵消
// 所以这道题问的是有多少个不大于n的平方数
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};
