const MOD = BigInt(10 ** 9 + 7);
function maximizeSquareArea (m: number, n: number, hFences: number[], vFences: number[]): number {
    hFences = [1, ...hFences, m, ];
    vFences = [1, ...vFences, n, ];
    const hSet = new Set<number>();
    for (let i = 0; i < hFences.length; i++) {
        for (let j = i + 1; j < hFences.length; j++) {
            hSet.add(Math.abs(hFences[j] - hFences[i]));
        }
    }
    let res = -1;

    for (let i = 0; i < vFences.length; i++) {
        for (let j = i + 1; j < vFences.length; j++) {
            const diff = Math.abs(vFences[i] - vFences[j]);
            if (hSet.has(diff)) {
                res = Math.max(res, diff);
            }
        }
    }

    return res === -1 ? -1 : Number(BigInt(res) * BigInt(res) % MOD);
}
