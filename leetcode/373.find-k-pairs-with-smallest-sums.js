/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // 最多是nums1.length*nums2.length对
    k = Math.min(k,nums1.length*nums2.length);
    // 所有选择对应一个矩阵，行数为nums1.length 列数为nums2.length
    // 每一行元素递增，每一列元素递增
    // 对于每一行/列,选择的元素都是按序

    // 这个数组的含义是当选择nums1中第i个元素时，在nums2中选择的元素的索引
    const indexs = new Array(nums1.length).fill(0);
    const result = [];
    let count = 0;
    while(count++<k){
        let minIndex;
        let minSum = Infinity;
        for(let i=0;i<nums1.length;i++){
            // nums1中所有选第i个元素组成的配对都被使用
            if(indexs[i] === nums2.length){
                continue;
            }
            // sum更小
            if(nums1[i] + nums2[indexs[i]]<minSum){
                minIndex = i;
                minSum = nums1[i] + nums2[indexs[i]];
            }
        }
        result.push([nums1[minIndex],nums2[indexs[minIndex]]]);
        indexs[minIndex]++;
    }
    return result;
};