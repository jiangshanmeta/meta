function nthMagicalNumber (n: number, a: number, b: number): number {
    if (a > b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    const LCM = lcm(a, b);
    let low = a;
    let high = a * n;
    let res = high;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const count = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / LCM);
        if (count < n) {
            low = mid + 1;
        } else {
            res = Math.min(res, mid);
            high = mid - 1;
        }
    }

    return res % (10 ** 9 + 7);
}

function gcd (a:number, b:number) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm (a:number, b:number) {
    return a * b / gcd(a, b);
}
