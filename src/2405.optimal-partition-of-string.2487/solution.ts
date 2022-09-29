function partitionString (s: string): number {
    let result = 1;
    let chars = 0;
    for (let i = 0; i < s.length; i++) {
        const code = 1 << (s.charCodeAt(i) - 97);
        if (chars & code) {
            result++;
            chars = 0;
        }
        chars ^= code;
    }
    return result;
}
