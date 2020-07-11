/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 和448题是一回事，448找的是消失的，这里找的是重复的
// 依然是调整尽可能保证序号和元素一致，不一致时元素就是重复的
var findDuplicates = function(nums) {
    let index = 0;
    while(index<nums.length){
        if(nums[index] === index+1){
            index++;
            continue;   
        }
        let tmp = nums[nums[index]-1];
        if(tmp === nums[index]){
            index++;
            continue;
        }
        nums[nums[index]-1] = nums[index];
        nums[index] = tmp;
    }
    const result = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i+1){
            result.push(nums[i])
        }
    }
    return result;
};