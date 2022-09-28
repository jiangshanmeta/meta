function equalSubstring (s: string, t: string, maxCost: number): number {
    const diffs:number[] = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        diffs[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }

    let left = 0;
    let right = -1;
    let result = 0;
    while (right + 1 < s.length) {
        right++;
        maxCost -= diffs[right];
        while (left <= right && maxCost < 0) {
            maxCost += diffs[left++];
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
}
