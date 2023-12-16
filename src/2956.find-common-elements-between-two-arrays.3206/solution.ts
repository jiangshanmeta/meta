function findIntersectionValues (nums1: number[], nums2: number[]): number[] {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    return [
        nums1.reduce((sum, item) => sum + (s2.has(item) ? 1 : 0), 0),
        nums2.reduce((sum, item) => sum + (s1.has(item) ? 1 : 0), 0),
    ];
}
