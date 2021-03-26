function hammingDistance(x: number, y: number): number {
    let result = 0;
    while(x && y){
        if( ((x&1)^(y&1)) === 1){
            result++;
        }
        x >>>= 1;
        y >>>= 1;
    }
    while(x>0){
        x &= (x-1);
        result++;
    }
    while(y>0){
        y &= (y-1);
        result++;
    }
    return result;
};