function commonFactors (a: number, b: number): number {
    let result = 0;
    const MAX = gcd(a, b);
    for (let i = 1; i <= MAX; i++) {
        if (a % i === 0 && b % i === 0) {
            result++;
        }
    }
    return result;
}

function gcd (a:number, b:number) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
