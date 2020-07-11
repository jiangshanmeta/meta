/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 标记是否用过
    const used = new Array(nums.length).fill(false);
    function backTracking(list,nums,sequence,used){
        // 递归退出条件，用上全部元素
        if(list.length === nums.length){
            return sequence.push(list.slice());
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]){
                continue;
            }
            list.push(nums[i]);
            used[i] = true;
            backTracking(list,nums,sequence,used);
            used[i] = false;
            list.pop();
        }
    }
    const sequence = [];
    backTracking([],nums,sequence,used);
    return sequence;
};