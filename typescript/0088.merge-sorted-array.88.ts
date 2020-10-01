/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1:number = m-1;
    let index2:number = nums1.length-1;
    while(index1>-1){
        nums1[index2--] = nums1[index1--];
    }
    index1 = nums1.length-m;
    index2 = 0;
    let index = 0;
    while(index1<nums1.length && index2<nums2.length){
        if(nums1[index1]>nums2[index2]){
            nums1[index++] = nums2[index2++];
        }else{
            nums1[index++] = nums1[index1++];
        }
    }
    while(index2<nums2.length){
        nums1[index++] = nums2[index2++];
    }
};