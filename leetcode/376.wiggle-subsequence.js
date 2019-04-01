/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划实现 思路类似于 leetcode 300 最长增长子序列
// 时间复杂度 O(n^2) 
var wiggleMaxLength = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    // increaseDp[i] 表示 到第i个节点为增长
    // decreaseDp[i] 表示 到第i个节点为减少
    const increaseDp = new Array(nums.length).fill(1);
    const decreaseDp = new Array(nums.length).fill(1);
    for(let i=1;i<nums.length;i++){
        for(let j=i-1;j>-1;j--){
            if(nums[j]<nums[i]){
                increaseDp[i] = Math.max(decreaseDp[j]+1,increaseDp[i]);
            }else if(nums[j]>nums[i]){
                decreaseDp[i] = Math.max(increaseDp[j]+1,decreaseDp[i]);
            }
        }
    }
    return Math.max(...decreaseDp,...increaseDp)
};


/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心实现 时间复杂度为O(n)
// 假设已有一个wiggle subsequence 下一个节点是nums[index]
// 如果wiggle subsequence最后是下降的 
// 若nums[index] 比wiggle subsequence最后的元素小 则替换掉最后一个元素
// 若nums[index] 比wiggle subsequence最后一个元素大 则wiggle subsequence长度+1
// wiggle subsequence 最后是上升的情况类似
var wiggleMaxLength = function(nums) {
    if(nums.length<2){
        return nums.length;
    }
    let sign = 0;
    const list = [nums[0]];
    let index = 1;
    // 确定初始subsequence是增加还是减少
    while(index<nums.length){
        if(nums[index] === nums[0]){
            index++;
            continue;
        }
        if(nums[index]>nums[0]){
            sign = 1;
        }else{
            sign = -1;
        }
        list.push(nums[index]);
        index++;
        break;
    }

    while(index<nums.length){
        if(sign>0){
            if(nums[index]>list[list.length-1]){
                list[list.length-1] = nums[index];
            }else if(nums[index]<list[list.length-1]){
                list.push(nums[index]);
                sign = -1;
            }
        }else{
            if(nums[index]>list[list.length-1]){
                list.push(nums[index]);
                sign = 1;
            }else if(nums[index]<list[list.length-1]){
                list[list.length-1] = nums[index];
            }
        }
        index++;
    }

    return list.length;
};