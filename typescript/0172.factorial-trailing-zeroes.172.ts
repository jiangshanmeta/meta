function trailingZeroes(n: number): number {
    let result = 0;
    let base = 5;
    while(base<=n){
        result += (n-n%base)/base;
        base *= 5;
    }
    return result;
};