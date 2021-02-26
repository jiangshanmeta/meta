function minCharacters(a: string, b: string): number {
    const countA:number[] = new Array(26).fill(0);
    const countB:number[] = new Array(26).fill(0);
    for(let i=0;i<a.length;i++){
        countA[a.charCodeAt(i)-97]++;        
    }
    for(let i=0;i<b.length;i++){
        countB[b.charCodeAt(i)-97]++;
    }
    const prefixSumA:number[] = new Array(26);
    const prefixSumB:number[] = new Array(26);
    const suffixSumA:number[] = new Array(26);
    const suffixSumB:number[] = new Array(26);
    prefixSumA[0] = 0;
    prefixSumB[0] = 0;
    suffixSumA[25] = 0;
    suffixSumB[25] = 0;
    for(let i=1;i<26;i++){
        prefixSumA[i] = prefixSumA[i-1]+countA[i-1];
        prefixSumB[i] = prefixSumB[i-1]+countB[i-1];
    }
    for(let i=24;i>-1;i--){
        suffixSumA[i] = suffixSumA[i+1]+countA[i+1];
        suffixSumB[i] = suffixSumB[i+1]+countB[i+1];        
    }
    let result = a.length+b.length-countA[25]-countB[25];
    for(let i=0;i<25;i++){
        result = Math.min(
            result,
            suffixSumA[i]+prefixSumB[i+1],
            suffixSumB[i]+prefixSumA[i+1],
            a.length+b.length-countA[i]-countB[i],
        )
    }

    return result
};