function myPow(x: number, n: number): number {
    if(n === 0){
        return 1;
    }
    if(x === 0){
        return 0; 
    }
    if(n<0){
        return 1/myPow(x,-n);
    }
    let result = 1;
    while(n>0){
        if(n&1){
            result *= x;
        }
        x *= x;
        n >>>= 1;
    }
    return result;
};