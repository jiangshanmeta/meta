function reorderedPowerOf2(N: number): boolean {
    const countN = getCount(N);
    let base = 1;
    while(base<10**9){
        if(match(countN,getCount(base))){
            return true;
        }
        base <<= 1;
    }
    return false;
};

function match(count1:number[],count2:number[]){
    for(let i=0;i<count1.length;i++){
        if(count1[i] !== count2[i]){
            return false
        }
    }
    return true;
}

function getCount(n:number):number[]{
    const result:number[] = new Array(10).fill(0);
    while(n){
       const digit = n%10;
       result[digit]++;
       n = (n-digit)/10; 
    }

    return result;
}