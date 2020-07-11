/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);
    const used = new Array(nums.length).fill(false);
    const L = nums.length;
    function backTracking(list,nums,sequence,used){
        if(list.length === L){
            return sequence.push(list.slice());
        }
        
        for(let i=0;i<L;i++){
            // 处理重复的
            if(used[i] || (i>0 && nums[i] === nums[i-1] && !used[i-1])){
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