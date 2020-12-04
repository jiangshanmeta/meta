/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // return nums.length !== new Set(nums).size
    const set = new Set();
    return nums.some((num) => {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    });
};
