function lengthOfLongestSubstring (s: string): number {
    const charIndexMap = new Map<string, number>();
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndexMap.has(s[i])) {
            const index = charIndexMap.get(s[i]);
            let left = i - charIndexMap.size;
            while (left <= index) {
                charIndexMap.delete(s[left++]);
            }
        }
        charIndexMap.set(s[i], i);
        result = Math.max(result, charIndexMap.size);
    }

    return result;
}
