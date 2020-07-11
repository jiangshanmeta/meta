/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = {};
    // indexStack存的是还未找到下一个更大元素的元素的索引
    const indexStack = [];
    const nextGreaterList = new Array(nums2.length);
    for(let i=0;i<nums2.length;i++){
        const value = nums2[i];
        map[value] = i;
        while(indexStack.length && value>nums2[indexStack[indexStack.length-1]]){
            nextGreaterList[indexStack.pop()] = value;
        }
        nextGreaterList[i] = -1;
        indexStack.push(i);
    }
    const result = [];
    for(let i=0;i<nums1.length;i++){
        result.push(nextGreaterList[map[nums1[i]]]);
    }
    
    return result;
};