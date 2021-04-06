function selfDividingNumbers (left: number, right: number): number[] {
    const result:number[] = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            result.push(i);
        }
    }
    return result;
}

function isSelfDividingNumber (num:number):boolean {
    let n = num;
    while (n) {
        const digit = n % 10;
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
        n = (n - digit) / 10;
    }
    return true;
}
