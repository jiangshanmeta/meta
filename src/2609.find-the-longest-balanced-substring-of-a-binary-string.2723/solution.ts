function findTheLongestBalancedSubstring (s: string): number {
    let result = 0;
    let index = 0;
    while (index < s.length) {
        let zero = 0;
        let one = 0;
        while (index < s.length && s[index] === '0') {
            zero++;
            index++;
        }
        while (index < s.length && s[index] === '1') {
            one++;
            index++;
        }
        result = Math.max(result, Math.min(one, zero) * 2);
    }
    return result;
}
