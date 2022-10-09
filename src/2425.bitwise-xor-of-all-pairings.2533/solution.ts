function xorAllNums (nums1: number[], nums2: number[]): number {
    let result = 0;
    if (nums2.length % 2 === 1) {
        for (const item of nums1) {
            result ^= item;
        }
    }
    if (nums1.length % 2 === 1) {
        for (const item of nums2) {
            result ^= item;
        }
    }
    return result;
}
