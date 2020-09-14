/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    k++;
    const map = new Map();
    return nums.some((num, index) => {
        if (!map.has(num)) {
            map.set(num, index);
            return false;
        }
        const lastIndex = map.get(num);
        if (index - lastIndex < k) {
            return true;
        }
        map.set(num, index);
    });
};
