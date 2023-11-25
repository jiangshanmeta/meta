function getMaxDigit (n:number) {
    let res = 0;
    while (n > 0) {
        const digit = n % 10;
        res = Math.max(res, digit);
        n = (n - digit) / 10;
    }
    return res;
}

function maxSum (nums: number[]): number {
    let result = -1;
    const maxByDigit = new Array<number>(10).fill(0);
    for (const n of nums) {
        const maxDigit = getMaxDigit(n);
        if (maxByDigit[maxDigit] !== 0) {
            result = Math.max(result, n + maxByDigit[maxDigit]);
        }
        maxByDigit[maxDigit] = Math.max(n, maxByDigit[maxDigit]);
    }

    return result;
}
