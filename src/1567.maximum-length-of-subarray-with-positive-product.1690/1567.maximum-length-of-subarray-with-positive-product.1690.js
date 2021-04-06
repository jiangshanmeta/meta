/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
    let result = 0;
    let left = 0;
    while (left < nums.length) {
        while (left < nums.length && nums[left] === 0) {
            left++;
        }

        if (left === nums.length) {
            break;
        }
        const negativeIndexs = [];
        let right = left;
        while (right < nums.length && nums[right] !== 0) {
            if (nums[right] < 0) {
                negativeIndexs.push(right);
            }
            right++;
        }
        if (negativeIndexs.length % 2 === 0) {
            result = Math.max(result, right - left);
        } else if (negativeIndexs.length === 1) {
            result = Math.max(result, negativeIndexs[0] - left, right - (negativeIndexs[0] + 1));
        } else {
            result = Math.max(
                result,
                negativeIndexs[negativeIndexs.length - 1] - left,
                right - (negativeIndexs[0] + 1)
            );
        }
        left = right;
    }
    return result;
};
