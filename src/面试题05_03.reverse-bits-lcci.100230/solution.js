/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
    const nums = [];
    const counts = [];
    let result = 1;
    for (let i = 0; i < 32; i++) {
        const digit = num & 1;
        num >>>= 1;
        if (nums.length === 0) {
            nums.push(digit);
            counts.push(1);
            continue;
        }
        if (nums[nums.length - 1] === digit) {
            counts[counts.length - 1]++;
        } else {
            nums.push(digit);
            counts.push(1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            result = Math.max(counts[i], result);
        } else {
            if (i > 0) {
                result = Math.max(counts[i - 1] + 1, result);
            }
            if (i < nums.length - 1) {
                result = Math.max(counts[i + 1] + 1, result);
            }
            if (counts[i] === 1 && i > 0 && i < nums.length - 1) {
                result = Math.max(result, counts[i - 1] + 1 + counts[i + 1]);
            }
        }
    }
    return result;
};
