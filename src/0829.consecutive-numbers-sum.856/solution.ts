function consecutiveNumbersSum (sn: number): number {
    let res = 0;
    for (let i = 1; i <= sn; i++) {
        const rest = sn - i * (i - 1) / 2;
        if (rest <= 0) {
            break;
        }
        if (rest % i === 0) {
            res++;
        }
    }
    return res;
}
