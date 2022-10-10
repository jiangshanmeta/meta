function countPrimeSetBits (left: number, right: number): number {
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, ]);
    let result = 0;
    for (let i = left; i <= right; i++) {
        if (primes.has(count1(i))) {
            result++;
        }
    }
    return result;
}

function count1 (num:number) {
    let result = 0;
    while (num) {
        result++;
        num = num & (num - 1);
    }
    return result;
}
