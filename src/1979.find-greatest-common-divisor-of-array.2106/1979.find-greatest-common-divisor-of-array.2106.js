/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max);
        min = Math.min(nums[i], min);
    }
    return gcd(max, min);
};

function gcd (a, b) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
