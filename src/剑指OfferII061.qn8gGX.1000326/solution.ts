function kSmallestPairs (nums1: number[], nums2: number[], k: number): number[][] {
    return nums1.reduce<number[][]>((acc, num1) => {
        acc.push(...nums2.map(num2 => [num1, num2, ]));
        return acc;
    }, []).sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])).slice(0, k);
}
