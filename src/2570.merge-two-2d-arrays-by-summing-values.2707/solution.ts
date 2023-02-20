function mergeArrays (nums1: number[][], nums2: number[][]): number[][] {
    const result:number[][] = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1][0] < nums2[index2][0]) {
            result.push(nums1[index1++]);
        } else if (nums1[index1][0] === nums2[index2][0]) {
            result.push([nums1[index1][0], nums1[index1++][1] + nums2[index2++][1], ]);
        } else {
            result.push(nums2[index2++]);
        }
    }
    while (index1 < nums1.length) {
        result.push(nums1[index1++]);
    }
    while (index2 < nums2.length) {
        result.push(nums2[index2++]);
    }
    return result;
}
