/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
    const map = {};
    let result = 0;
    const mod = 10 ** 9 + 7;
    for (let i = 0; i < nums.length; i++) {
        const diff = rev(nums[i]) - nums[i];
        if (map[diff]) {
            result = (result + map[diff]) % mod;
            map[diff]++;
        } else {
            map[diff] = 1;
        }
    }
    return result;
};

function rev (num) {
    let result = 0;
    while (num) {
        const digit = num % 10;
        result = result * 10 + digit;
        num = (num - digit) / 10;
    }
    return result;
}
