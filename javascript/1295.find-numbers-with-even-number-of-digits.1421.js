/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        // 计算一个数字的位数
        let count = 0;
        while(num>0){
            num = (num-num%10)/10;
            count++;
        }
        if(count%2 === 0){
            result++;
        }
    }
    return result;
};