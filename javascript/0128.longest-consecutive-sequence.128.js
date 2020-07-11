/**
 * @param {number[]} nums
 * @return {number}
 */
// union find
var longestConsecutive = function(nums) {
    const countMap = {};
    const parentMap = {};
    let max = 0;
    for(let i=0;i<nums.length;i++){
        // 重复元素
        if(parentMap[nums[i]] !== undefined){
            continue;
        }
        let count = 1;
        let parentId = nums[i];
        // 和前面和合并 合并规则 尽可能是parentId小
        if(parentMap[nums[i]-1] !== undefined){
            // 找到尽可能小的parentId
            parentId = nums[i]-1;
            while(parentMap[parentId] !== parentId){
                parentId = parentMap[parentId];
            }
            count += countMap[parentId];
        }
        // 和后面的合并 后边第一个元素已经是对应树的根节点了 所以更新parentId即可
        if(parentMap[nums[i]+1] !== undefined){
            count += countMap[nums[i]+1];
            parentMap[nums[i]+1] = parentId;
        }
        
        parentMap[nums[i]] = parentId;
        countMap[parentId] = count;

        max = Math.max(max,count);
    }

    return max;
};