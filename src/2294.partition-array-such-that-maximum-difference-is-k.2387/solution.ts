// 就尽可能把接近的放到一组呗
// 所以先排个序
function partitionArray (nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let result = 0;
    let index = 0;
    while (index < nums.length) {
        result++;
        const base = nums[index++];
        while (index < nums.length && nums[index] - base <= k) {
            index++;
        }
    }
    return result;
}
