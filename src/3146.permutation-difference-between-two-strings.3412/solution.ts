function findPermutationDifference (s: string, t: string): number {
    const positions = new Array(26);
    for (let i = 0; i < s.length; i++) {
        positions[s.charCodeAt(i) - 97] = i;
    }
    let result = 0;
    for (let i = 0; i < t.length; i++) {
        result += Math.abs(i - positions[t.charCodeAt(i) - 97]);
    }
    return result;
}
