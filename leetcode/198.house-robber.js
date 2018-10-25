/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划问题
// F(n) = max(F(n-1) , F(n-2)+nums[n-1])
// F(1) = nums[0]
// F(2) = max(nums[0],nums[1])
var rob = function(nums) {
    if(nums.length === 0){
        return 0;
    }else if(nums.length === 1){
        return nums[0];
    }
    // 初始条件
    let a = nums[0];
    let b = Math.max(nums[0],nums[1]);
    
    for(let i=2;i<nums.length;i++){
        let tmp = a + nums[i];
        a = b;
        b = Math.max(b,tmp);
    }
    return b;
};