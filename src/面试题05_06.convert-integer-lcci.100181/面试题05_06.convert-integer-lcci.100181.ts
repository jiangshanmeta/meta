function convertInteger(A: number, B: number): number {
    A >>>= 0;
    B >>>= 0;
    let result = 0;
    for(let i=0;i<32;i++){
        if( (A&1) !== (B&1) ){
            result++;
        }
        A >>>= 1;
        B >>>= 1;
    }
    return result;
};