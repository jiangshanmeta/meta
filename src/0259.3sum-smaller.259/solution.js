/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
    let result = 0;
    nums.sort((a, b) => a - b);
    let index1 = 0;
    while (index1 < nums.length - 2) {
        let index2 = index1 + 1;
        let index3 = nums.length - 1;
        while (index2 < index3) {
            if (nums[index1] + nums[index2] + nums[index3] < target) {
                // 在已经确定index1 和index2的情况下，第三个数索引可选范围是[index2+1,index3]
                // 因为最大的index3和满足条件
                result += index3 - index2;
                index2++;
            } else {
                index3--;
            }
        }
        index1++;
    }
    return result;
};
