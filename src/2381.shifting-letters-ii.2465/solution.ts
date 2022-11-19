function shiftingLetters (s: string, shifts: number[][]): string {
    const moves = new Array<number>(s.length + 1).fill(0);
    for (const [s, e, d, ] of shifts) {
        const diff = d === 0 ? -1 : 1;
        moves[s] += diff;
        moves[e + 1] -= diff;
    }
    for (let i = 1; i < s.length; i++) {
        moves[i] += moves[i - 1];
    }

    const result:string[] = [];
    for (let i = 0; i < s.length; i++) {
        let code = (s.charCodeAt(i) - 97 + moves[i]) % 26;
        if (code < 0) {
            code += 26;
        }
        result.push(String.fromCharCode(code + 97));
    }

    return result.join('');
}
