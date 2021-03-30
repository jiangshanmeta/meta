function getNoZeroIntegers(n: number): number[] {
    for(let i=1;i<n;i++){
        const rest = n-i;
        if(rest<i){
            break;
        }
        if(isValid(i) && isValid(rest)){
            return [i,rest];
        }
    }
    return [];
};

function isValid(n:number){
    while(n>0){
        const digit = n%10;
        if(digit === 0){
            return false;
        }
        n = (n-digit)/10;
    }
    return true;
}