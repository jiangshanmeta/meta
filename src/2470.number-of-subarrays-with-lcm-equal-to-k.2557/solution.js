/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === k) {
            result++;
        }
        for (let j = i + 1; j < nums.length; j++) {
            num = lcm(num, nums[j]);
            if (k % num !== 0) {
                break;
            }
            if (num === k) {
                result++;
            }
        }
    }
    return result;
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
// 最小公倍数
function lcm (a, b) {
    return a * b / gcd(a, b);
}
