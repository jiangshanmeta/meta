function numberOfWays (s: string): number {
    let right1 = s[s.length - 1] === '1' ? 1 : 0;
    const right1s = new Array<number>(s.length).fill(0);
    for (let i = s.length - 2; i > -1; i--) {
        right1s[i] = right1;
        if (s[i] === '1') {
            right1++;
        }
    }
    const pairs01 = new Array<number>(s.length).fill(0);
    const pairs10 = new Array<number>(s.length).fill(0);
    for (let i = s.length - 2; i > -1; i--) {
        pairs01[i] += pairs01[i + 1];
        pairs10[i] += pairs10[i + 1];
        if (s[i] === '0') {
            pairs01[i] += right1s[i];
        } else {
            pairs10[i] += s.length - i - right1s[i] - 1;
        }
    }
    let result = 0;
    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] === '0') {
            result += pairs10[i + 1];
        } else {
            result += pairs01[i + 1];
        }
    }
    return result;
}
