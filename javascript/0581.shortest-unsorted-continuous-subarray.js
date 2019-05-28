/**
 * @param {number[]} nums
 * @return {number}
 */

// 从左到右看，一个小的元素结束了递增序列
// 从右到左看，一个大的元素结束了递减序列
// 中间剩余元素找最值
// 左侧递增序列大于最小值的 右侧递增序列小于最大值的 都需要更换位置

var findUnsortedSubarray = function(nums) {
    // 先找到最左侧和最右侧两个递增序列
    let left = 0;
    while(left<nums.length-1){
        if(nums[left+1]<nums[left]){
            break;
        }
        left++;
    }
    if(left === nums.length-1){
        return 0;
    }
    
    let right = nums.length-1;
    while(right>0){
        if(nums[right-1]>nums[right]){
            break;
        }
        right--;
    }
    
    // 找到中间剩余元素的最大值和最小值
    let max = -Infinity;
    let min = Infinity;
    for(let i=left;i<right+1;i++){
        if(nums[i]>max){
            max = nums[i];
        }
        if(nums[i]<min){
            min = nums[i];
        }
    }
    
    // 在左侧递增序列找到第一个满足>min的值(利用二分)
    let low = 0;
    let high = left;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(nums[mid]>min){
            high = mid-1;
            if(mid<left){
                left = mid;
            }
        }else{
            low = mid+1;
        }
    }
    
    // 在右侧递增序列找到最后一个满足<max的值(利用二分)
    low = right;
    high = nums.length-1;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(nums[mid]<max){
            if(mid>right){
                right = mid;
            }
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return right-left+1;
};