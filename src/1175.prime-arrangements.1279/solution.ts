function numPrimeArrangements (n: number): number {
    const p = countPrimesLT(n + 1);
    const mod = 10 ** 9 + 7;
    let result = 1;
    for (let i = 2; i <= p; i++) {
        result = result * i % mod;
    }
    for (let i = 2; i <= n - p; i++) {
        result = result * i % mod;
    }
    return result;
}

function countPrimesLT (n:number) {
    const isPrimes = new Array<boolean>(n).fill(true);
    let result = 0;
    for (let i = 2; i < n; i++) {
        if (!isPrimes[i]) {
            continue;
        }
        result++;
        for (let j = 2 * i; j < n; j += i) {
            isPrimes[j] = false;
        }
    }
    return result;
}
