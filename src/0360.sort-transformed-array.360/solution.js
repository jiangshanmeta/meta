/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function (nums, a, b, c) {
    if (nums.length < 2) {
        return nums.map(item => a * item * item + b * item + c);
    }

    if (a !== 0) {
        // 真 二次函数
        const center = -b / (2 * a);
        // index 数组中距离center最近的元素的索引
        let index = 0;
        let diff = Math.abs(nums[0] - center);
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            const delta = Math.abs(nums[mid] - center);
            if (delta < diff) {
                index = mid;
                diff = delta;
            }
            if (nums[mid] > center) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        let left, right;
        if (index + 1 < right) {
            left = index;
            right = index + 1;
        } else {
            left = index - 1;
            right = index;
        }

        let delta = 1;
        let startIndex = 0;
        if (a < 0) {
            delta = -1;
            startIndex = nums.length - 1;
        }
        const result = new Array(nums.length);
        while (left > -1 && right < nums.length) {
            const deltaL = Math.abs(nums[left] - center);
            const deltaR = Math.abs(nums[right] - center);
            if (deltaL < deltaR) {
                result[startIndex] = a * nums[left] * nums[left] + b * nums[left] + c;
                left--;
            } else {
                result[startIndex] = a * nums[right] * nums[right] + b * nums[right] + c;
                right++;
            }
            startIndex += delta;
        }
        while (left > -1) {
            result[startIndex] = a * nums[left] * nums[left] + b * nums[left] + c;
            startIndex += delta;
            left--;
        }
        while (right < nums.length) {
            result[startIndex] = a * nums[right] * nums[right] + b * nums[right] + c;
            startIndex += delta;
            right++;
        }

        return result;
    } else if (b !== 0) {
        // 真一次函数
        if (b > 0) {
            return nums.map(item => b * item + c);
        } else {
            return nums.reverse().map(item => b * item + c);
        }
    } else {
        // 常数
        return new Array(nums.length).fill(c);
    }
};
