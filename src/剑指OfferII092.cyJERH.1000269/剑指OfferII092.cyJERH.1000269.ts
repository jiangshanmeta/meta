function minFlipsMonoIncr (s: string): number {
    let one = 0;
    let zero = 0;
    for (const letter of s) {
        if (letter === '0') {
            one++;
        } else {
            one = Math.min(one, zero);
            zero++;
        }
    }
    return Math.min(one, zero);
}
