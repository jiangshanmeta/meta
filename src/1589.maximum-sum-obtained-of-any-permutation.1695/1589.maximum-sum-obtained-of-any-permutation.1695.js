/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
// 差分数组
var maxSumRangeQuery = function(nums, requests) {
    const counts = new Array(nums.length).fill(0);
    for(let i=0;i<requests.length;i++){
        const [start,end] = requests[i];
        counts[start]++;
        if(end+1<nums.length){
            counts[end+1]--;
        }
    }
    for(let i=1;i<counts.length;i++){
        counts[i] += counts[i-1];
    }

    counts.sort((a,b)=>b-a);
    nums.sort((a,b)=>b-a);
    let result = 0;
    const mod = 10**9+7;
    for(let i=0;i<nums.length;i++){
        result = (result+counts[i]*nums[i])%mod;
    }
    return result;
};