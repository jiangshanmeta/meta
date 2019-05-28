/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let rightIndex = nums.length-1;
    // 从后往前找 避免前面的删除元素 后面坐标计算稍微麻烦
    while(rightIndex>-1){
        let low = 0;
        let high = rightIndex;
        let leftIndex = rightIndex;
        const target = nums[rightIndex];
        // 二分法找是target值的最小索引
        while(low<=high){
            const mid = (low+high) >> 1;
            if(nums[mid] === target){
                leftIndex = Math.min(leftIndex,mid);
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        // 重复的只能留两个
        rightIndex-leftIndex>1 && nums.splice(leftIndex,rightIndex-leftIndex-1);  
        // 继续看前面的元素
        rightIndex = leftIndex-1;
    }
    return nums.length;
};