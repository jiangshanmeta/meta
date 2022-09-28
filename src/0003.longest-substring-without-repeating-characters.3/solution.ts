function lengthOfLongestSubstring (s: string): number {
    let result = 0;
    let lastIndex = -1;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            lastIndex = Math.max(lastIndex, map.get(s[i])!);
        }
        map.set(s[i], i);
        result = Math.max(result, i - lastIndex);
    }
    return result;
}
