function countPrimes (n: number): number {
    const isPrimes:boolean[] = new Array(n).fill(true);
    let result = 0;
    for (let i = 2; i < n; i++) {
        if (!isPrimes[i]) {
            continue;
        }
        result++;
        let num = i * 2;
        while (num < n) {
            isPrimes[num] = false;
            num += i;
        }
    }

    return result;
}
// 欧拉筛 O(N)
function countPrimes2 (n: number): number {
    const primes:number[] = [];
    const isPrimes = new Array<boolean>(n).fill(true);
    for (let i = 2; i < isPrimes.length; i++) {
        if (isPrimes[i]) {
            primes.push(i);
        }
        for (let j = 0; j < primes.length; j++) {
            if (primes[j] * i >= n) {
                break;
            }
            isPrimes[i * primes[j]] = false;
            if (i % primes[j] === 0) {
                break;
            }
        }
    }
    return primes.length;
}
