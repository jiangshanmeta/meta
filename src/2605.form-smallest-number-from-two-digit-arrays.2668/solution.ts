function minNumber (nums1: number[], nums2: number[]): number {
    const flags1 = new Array<boolean>(10);
    let min1 = 9;
    const flags2 = new Array<boolean>(10);
    let min2 = 9;
    for (const n of nums1) {
        flags1[n] = true;
        min1 = Math.min(n, min1);
    }
    for (const n of nums2) {
        flags2[n] = true;
        min2 = Math.min(n, min2);
    }
    for (let i = 1; i < 10; i++) {
        if (flags1[i] && flags2[i]) {
            return i;
        }
    }

    return Math.min(min1 * 10 + min2, min2 * 10 + min1);
}
