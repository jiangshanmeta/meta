function minSum(nums1: number[], nums2: number[]): number {
    let sum1 = 0;
    let zero1 = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            zero1++;
        } else {
            sum1 += nums1[i];
        }
    }
    let sum2 = 0;
    let zero2 = 0;
    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] === 0) {
            zero2++;
        } else {
            sum2 += nums2[i]
        }
    }

    if (zero1 === 0 && zero2 === 0) {
        if (sum1 === sum2) {
            return sum1
        }
        return -1;
    }
    if (zero1 === 0) {
        if (sum2 + zero2 <= sum1) {
            return sum1;
        }
        return -1;
    }
    if (zero2 === 0) {
        if (sum1 + zero1 <= sum2) {
            return sum2
        }
        return -1;
    }

    return Math.max(sum1 + zero1, sum2 + zero2);
};