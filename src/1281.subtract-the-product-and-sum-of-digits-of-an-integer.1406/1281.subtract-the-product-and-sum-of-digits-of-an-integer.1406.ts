function subtractProductAndSum(n: number): number {
    let multiply =1;
    let sum = 0;
    while(n>0){
        const digit = n%10;
        multiply *= digit;
        sum += digit;
        n = (n-digit)/10;
    }
    return multiply-sum;
};