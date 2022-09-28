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
