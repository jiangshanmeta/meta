const multi = (n:number) => {
    let result = 1;
    while (n > 1) {
        const digit = n % 10;
        result *= digit;
        n = (n - digit) / 10;
    }
    return result;
};

function smallestNumber (n: number, t: number): number {
    while (multi(n) % t !== 0) {
        n++;
    }
    return n;
}
