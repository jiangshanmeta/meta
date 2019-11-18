/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    // dp
    let prev = [0,0,0];

    for(let i=0;i<nums.length;i++){
        const next = prev.slice(0);

        const index0 = (prev[0]+nums[i])%3;
        const index1 = (prev[1]+nums[i])%3;
        const index2 = (prev[2]+nums[i])%3;
        
        next[index0] = Math.max(next[index0],prev[0]+nums[i])
        next[index1] = Math.max(next[index1],prev[1]+nums[i])
        next[index2] = Math.max(next[index2],prev[2]+nums[i]);
        // 此时next[i]是当前mod为i对应的最大值

        prev = next;
    }

    return prev[0];
};