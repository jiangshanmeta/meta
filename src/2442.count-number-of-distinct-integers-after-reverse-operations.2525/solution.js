/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    return new Set([...nums, ...nums.map(reverse), ]).size;
};

function reverse (num) {
    let result = 0;
    while (num) {
        const digit = num % 10;
        result = result * 10 + digit;
        num = (num - digit) / 10;
    }
    return result;
}
