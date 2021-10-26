function twoOutOfThree (nums1: number[], nums2: number[], nums3: number[]): number[] {
    const result = new Set<number>();
    const set1 = new Set(nums1);
    for (let i = 0; i < nums2.length; i++) {
        if (set1.has(nums2[i])) {
            result.add(nums2[i]);
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        if (set1.has(nums3[i])) {
            result.add(nums3[i]);
        }
    }
    const set2 = new Set(nums2);
    for (let i = 0; i < nums3.length; i++) {
        if (set2.has(nums3[i])) {
            result.add(nums3[i]);
        }
    }

    return [...result, ];
}
