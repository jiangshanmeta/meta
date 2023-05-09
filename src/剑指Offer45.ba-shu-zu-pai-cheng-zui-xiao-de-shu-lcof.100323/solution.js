/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    return nums.sort((a, b) => {
        const strA = String(a);
        const strB = String(b);
        if (strA[0] !== strB[0]) {
            return +strA[0] - (+strB[0]);
        }
        return `${strA}${strB}` < `${strB}${strA}` ? -1 : 1;
    }).join('');
};
