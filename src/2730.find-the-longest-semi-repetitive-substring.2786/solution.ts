function longestSemiRepetitiveSubstring (s: string): number {
    const indexs = [-1, ];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            indexs.push(i - 1);
        }
    }
    indexs.push(s.length - 1);
    if (indexs.length === 2) {
        return s.length;
    }
    let result = 0;
    for (let i = 1; i < indexs.length - 1; i++) {
        result = Math.max(result, indexs[i + 1] - indexs[i - 1]);
    }

    return result;
}
