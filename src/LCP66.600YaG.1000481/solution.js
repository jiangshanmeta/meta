/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function (demand) {
    const result = new Array(26).fill(0);
    for (let i = 0; i < demand.length; i++) {
        const day = countDay(demand[i]);
        for (let j = 0; j < 26; j++) {
            result[j] = Math.max(result[j], day[j]);
        }
    }
    return result.reduce((sum, item) => sum + item, 0);
};

function countDay (str) {
    const result = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        result[str.charCodeAt(i) - 97]++;
    }
    return result;
}
