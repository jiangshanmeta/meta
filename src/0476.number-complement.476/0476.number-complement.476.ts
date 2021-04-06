function findComplement (num: number): number {
    let count = getDigit(num);
    let mask = 1;
    while (count) {
        if (mask & num) {
            count--;
        }
        mask <<= 1;
    }
    return ((~num) >>> 0) & (mask - 1);
}

function getDigit (num:number):number {
    let result = 0;
    while (num) {
        result++;
        num = num & (num - 1);
    }
    return result;
}
