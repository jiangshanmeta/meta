function numberOfMatches(n: number): number {
    let result = 0;
    while(n>1){
        if(n&1){
            const m = n >>>1;
            result += m;
            n = m+1;
        }else{
            const m = n >>> 1;
            result += m;
            n = m;
        }
    }
    return result
};