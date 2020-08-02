/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const sums = [];
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        sums.push(sum);
    }
    
    let count = nums.length-1;
    for(let i=1;i<nums.length;i++){
        const count = nums.length-i;
        const start = sums.length-count;
        const end = sums.length;
        let remove = nums[i-1];
        for(let j=start;j<end;j++){
            sums.push(sums[j]-remove);
        }
    }

    sums.sort((a,b)=>a-b);
    left--;

    let result = 0;
    let mod = 10**9+7;
    for(let i=left;i<right;i++){
        result = (result+sums[i])%mod;
    }
    return result;
};