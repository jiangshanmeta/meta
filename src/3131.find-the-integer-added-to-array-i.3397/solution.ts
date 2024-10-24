function addedInteger (nums1: number[], nums2: number[]): number {
    const min1 = Math.min(...nums1);
    const min2 = Math.min(...nums2);
    return min2 - min1;
}
