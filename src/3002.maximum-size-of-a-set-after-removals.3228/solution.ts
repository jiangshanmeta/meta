function maximumSetSize (nums1: number[], nums2: number[]): number {
    const N = nums1.length;
    const H = N >> 1;
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    const u1:number[] = [];
    const u2:number[] = [];
    const d:number[] = [];
    for (const item of s1) {
        if (s2.has(item)) {
            d.push(item);
        } else {
            u1.push(item);
        }
    }
    for (const item of s2) {
        if (!s1.has(item)) {
            u2.push(item);
        }
    }
    let rest = 0;
    if (u1.length < H) {
        rest += H - u1.length;
    }
    if (u2.length < H) {
        rest += H - u2.length;
    }

    return Math.min(rest, d.length) + Math.min(u1.length, H) + Math.min(u2.length, H);
}
