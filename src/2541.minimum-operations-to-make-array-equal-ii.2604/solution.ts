function minOperations (nums1: number[], nums2: number[], k: number): number {
    if (k === 0) {
        for (let i = 0; i < nums1.length; i++) {
            if (nums1[i] !== nums2[i]) {
                return -1;
            }
        }
        return 0;
    }
    const sum1 = nums1.reduce((acc, item) => acc + item, 0);
    const sum2 = nums2.reduce((acc, item) => acc + item, 0);
    if (sum1 !== sum2) {
        return -1;
    }
    let result = 0;
    for (let i = 0; i < nums1.length; i++) {
        if ((nums1[i] - nums2[i]) % k !== 0) {
            return -1;
        }
        if (nums1[i] > nums2[i]) {
            result += (nums1[i] - nums2[i]) / k;
        }
    }
    return result;
}
