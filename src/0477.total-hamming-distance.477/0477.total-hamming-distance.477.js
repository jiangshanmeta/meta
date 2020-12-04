/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let count = 0;
    const L = nums.length;
    for (let j = 0; j < 32; j++) {
        let bitCount = 0;
        for (let i = 0; i < L; i++) {
            bitCount += (nums[i] & 1);
            nums[i] = nums[i] >> 1;
        }
        count += bitCount * (L - bitCount);
    }

    return count;
};
