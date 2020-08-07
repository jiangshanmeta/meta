/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
    const mod = 10**9+7;
    let lastIndex1 = 0;
    let lastIndex2 = 0;
    let index1 = 0;
    let index2 = 0;
    let result = 0;
    while(index1<nums1.length && index2<nums2.length){
        if(nums1[index1]<nums2[index2]){
            index1++;
            continue;
        }
        if(nums1[index1]>nums2[index2]){
            index2++;
            continue;
        }
        const sectionSum = Math.max(rangeSum(nums1,lastIndex1,index1),rangeSum(nums2,lastIndex2,index2));
        result = (result+sectionSum)%mod;
        index1++;
        index2++;
        lastIndex1 = index1;
        lastIndex2 = index2;
    }
    const restSum = Math.max(rangeSum(nums1,lastIndex1,nums1.length-1),rangeSum(nums2,lastIndex2,nums2.length-1));
    result = (result+restSum)%mod;
    return result;
};

function rangeSum(arr,start,end){
    let result = 0;
    for(let i=start;i<=end;i++){
        result += arr[i];
    }
    return result;
}