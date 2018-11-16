/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let index = 0;
    // 我们的目标是调整数组，尽可能让坐标和数字(数字是从1-N的)对应
    while(index<nums.length){
        // 数字和坐标已经对应
        if(nums[index] === index+1){
            index++;
            continue;
        }
        // 尝试交换,把当前数字放到应该的位置
        let tmp = nums[nums[index]-1];
        // 要交换的位置已经对应数字了，此时是重复的情况，跳过即可
        if(tmp === nums[index]){
            index++;
            continue;
        }
        nums[nums[index]-1] = nums[index];
        nums[index] = tmp;
    }
    // 找到坐标和数字不匹配的
    const result = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i+1){
            result.push(i+1);
        }
    }
    return result;
};