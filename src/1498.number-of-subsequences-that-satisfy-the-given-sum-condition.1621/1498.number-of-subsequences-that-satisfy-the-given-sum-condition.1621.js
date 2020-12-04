/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// (a+b)modP=[(amodP)+(bmodP)]modP
// (a×b)modP=[(amodP)×(bmodP)]modP
var numSubseq = function (nums, target) {
    const max = 10 ** 5 + 1;
    const mod = 10 ** 9 + 7;
    const power = [
        1, ];
    for (let i = 1; i < max; i++) {
        power.push(power[i - 1] * 2 % mod);
    }

    nums.sort((a, b) => a - b);
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        while (left <= right && nums[left] + nums[right] > target) {
            right--;
        }
        if (right < left) {
            break;
        }
        // left必选 left+1~right随意 有2**(right-left)
        result = (result + power[right - left]) % mod;
        left++;
    }
    return result;
};
