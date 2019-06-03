/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    const result = [];
    let index1 = 0;
    let index2 = 0;
    while(index1<nums1.length && index2<nums2.length){
        const delta = nums2[index2]-nums1[index1];
        if(delta>0){
            index1++;
        }else if(delta<0){
            index2++;
        }else{
            result.push(nums1[index1]);
            index1++;
            index2++;
        }
    }
    return result;
};