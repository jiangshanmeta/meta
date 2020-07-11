/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    // 找到前缀和最小的
    let minNum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        minNum = Math.min(minNum,sum);
    }
    
    if(minNum<0){
        return -minNum+1;
    }else{
        return 1;
    }
};