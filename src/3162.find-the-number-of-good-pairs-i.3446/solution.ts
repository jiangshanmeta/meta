function numberOfPairs (nums1: number[], nums2: number[], k: number): number {
    let cnt = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] % (nums2[j] * k) === 0) {
                cnt++;
            }
        }
    }
    return cnt;
}
