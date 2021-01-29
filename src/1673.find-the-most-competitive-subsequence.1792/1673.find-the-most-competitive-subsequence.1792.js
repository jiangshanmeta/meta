/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const helper = [];
    let start = 0;
    const result = [];
    let end = nums.length-k;
    for(let i=0;i<end;i++){
        while(helper.length>0 && nums[i]<helper[helper.length-1]){
            helper.pop();
        }
        helper.push(nums[i]);
    }
    while(end<nums.length){
        const num = nums[end++];

        while(helper.length>start && num<helper[helper.length-1]){
            helper.pop();
        }
        helper.push(num);
        result.push(helper[start++]);
    }

    return result;
};