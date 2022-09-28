/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let result = 0;
    // 需要*2的最大次数
    let max = 0;
    for (let num of nums) {
        // count统计的是右移次数 由于统计了最后一个1的右移(应该只算+1) 所以要-1
        let count = 0;
        while (num) {
            if (num & 1) {
                result++;
            }
            count++;
            num >>= 1;
        }
        max = Math.max(count - 1, max);
    }
    return max + result;
};
