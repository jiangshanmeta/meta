/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    if (nums.length === 0) {
        if (lower !== upper) {
            return [`${lower}->${upper}`, ];
        } else {
            return [`${lower}`, ];
        }
    }

    const result = [];
    if (nums[0] !== lower) {
        const left = lower;
        const right = nums[0] - 1;
        if (left !== right) {
            result.push(`${left}->${right}`);
        } else {
            result.push(`${left}`);
        }
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i] - 1) {
            const left = nums[i - 1] + 1;
            const right = nums[i] - 1;
            if (left !== right) {
                result.push(`${left}->${right}`);
            } else {
                result.push(`${left}`);
            }
        }
    }
    if (nums[nums.length - 1] < upper) {
        const left = nums[nums.length - 1] + 1;
        const right = upper;
        if (left !== right) {
            result.push(`${left}->${right}`);
        } else {
            result.push(`${left}`);
        }
    }

    return result;
};
