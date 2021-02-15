function numberOfSteps (num: number): number {
    let result = 0;
    while(num){
        if(num&1){
            num--;
        }else{
            num >>= 1;
        }
        result++;
    }
    return result
};