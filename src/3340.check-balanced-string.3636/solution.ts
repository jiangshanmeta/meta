function isBalanced (num: string): boolean {
    let diff = 0;
    for (let i = 0; i < num.length; i++) {
        const n = +num[i];
        if (i % 2 === 0) {
            diff += n;
        } else {
            diff -= n;
        }
    }
    return diff === 0;
}
