function getSmallestString(n: number, k: number): string {
    const result:number[] = new Array(n).fill(97);
    k -= n;
    let index = n-1;
    while(k>0){
        if(k<25){
            result[index] += k;
            k = 0;
        }else{
            result[index] += 25;
            k -= 25;
        }
        index--;
    }
    return result.map(code=>String.fromCharCode(code)).join('')
};