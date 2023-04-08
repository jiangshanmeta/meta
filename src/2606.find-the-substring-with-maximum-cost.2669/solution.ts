function maximumCostSubstring (s: string, chars: string, vals: number[]): number {
    const allVals = new Array<number>(26);
    for (let i = 0; i < 26; i++) {
        allVals[i] = i + 1;
    }
    for (let i = 0; i < chars.length; i++) {
        allVals[chars.charCodeAt(i) - 97] = vals[i];
    }
    let result = 0;
    let current = 0;
    for (let i = 0; i < s.length; i++) {
        current = Math.max(0, current) + allVals[s.charCodeAt(i) - 97];
        result = Math.max(result, current);
    }
    return result;
}
