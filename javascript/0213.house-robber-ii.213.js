/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 就怕给个空数组
    if(nums.length === 0){
        return 0;
    }
    // 非空且最多只有两个元素时求最值就行了
    if(nums.length<3){
        return Math.max(...nums);
    }
    
    // dp1是第0个元素被使用了
    const dp1 = new Array(nums.length);
    // dp2是第0个元素未被使用
    const dp2 = new Array(nums.length);
    dp1[0] = nums[0];
    dp1[1] = dp1[0];
    dp2[0] = 0;
    dp2[1] = nums[1];
    
    for(let i=2;i<nums.length-1;i++){
        dp1[i] = Math.max(dp1[i-1],dp1[i-2]+nums[i]);
        dp2[i] = Math.max(dp2[i-1],dp2[i-2]+nums[i]);
    }
    
    dp2[nums.length-1] = Math.max(dp2[nums.length-2],dp2[nums.length-3]+nums[nums.length-1]);
    
    // dp1因为第0的元素被使用了 所以最后一个元素不能被用 即dp1[nums.length-1] === dp1[nums.length-2]
    return Math.max(dp1[nums.length-2],dp2[nums.length-1]);
};