function bitwiseComplement(N: number): number {
    if(N === 0){
        return 1
    }
    let count = getDigit(N);
    let mask = 1;
    while(count){
        if(mask&N){
            count--;
        }
        mask <<= 1;
    }
    return ((~N)>>>0)&(mask-1)
};

function getDigit(num:number):number{
    let result = 0;
    while(num){
        result++;
        num = num&(num-1);
    }
    return result
}