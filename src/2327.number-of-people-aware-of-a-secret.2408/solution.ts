const MOD = 10 ** 9 + 7;

function peopleAwareOfSecret (n: number, delay: number, forget: number): number {
    const added = new Array<number>(n + 1).fill(0);
    added[1] = 1;
    const knowns = new Array<number>(n + 1).fill(0);
    let canShare = 0;
    knowns[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        const forgetToday = i - forget < 1 ? 0 : added[i - forget];
        canShare = (canShare + (i - delay < 1 ? 0 : added[i - delay]) - forgetToday) % MOD;
        if (canShare < 0) {
            canShare += MOD;
        }
        added[i] = canShare;

        knowns[i] = (knowns[i - 1] + added[i] - forgetToday + MOD) % MOD;
    }
    return knowns[n];
}
