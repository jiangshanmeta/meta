/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            // 确认有值，但不知道最低和最高
            let findMinHigh = mid;
            let min = mid;

            while (low <= findMinHigh) {
                const mid2 = Math.floor((low + findMinHigh) / 2);
                if (nums[mid2] === target) {
                    findMinHigh = mid2 - 1;
                    min = mid2;
                } else {
                    low = mid2 + 1;
                }
            }

            let findMaxLow = mid;
            let max = mid;

            while (findMaxLow <= high) {
                const mid3 = Math.ceil((findMaxLow + high) / 2);
                if (nums[mid3] === target) {
                    max = mid3;
                    findMaxLow = mid3 + 1;
                } else {
                    high = mid3 - 1;
                }
            }

            return max - min + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return 0;
};
