function checkPowersOfThree (n: number): boolean {
    // 基于等比数列求和公式 可以证明对于该序列 Sn-1 < an 所以应当尽可能用大的数字
    const candidates = [];
    let base = 1;
    while (base <= n) {
        candidates.push(base);
        base *= 3;
    }
    for (let i = candidates.length - 1; i > -1; i--) {
        if (candidates[i] > n) {
            continue;
        }
        n -= candidates[i];
    }
    return n === 0;
}
