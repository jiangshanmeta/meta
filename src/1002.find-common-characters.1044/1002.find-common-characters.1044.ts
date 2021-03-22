function commonChars(A: string[]): string[] {
    const finalCounts:number[] = new Array(26).fill(Infinity);
    for(let i=0;i<A.length;i++){
        const word = A[i];
        const counts:number[] = new Array(26).fill(0);
        for(let j=0;j<word.length;j++){
            counts[word.charCodeAt(j)-97]++;
        }
        for(let j=0;j<26;j++){
            finalCounts[j] = Math.min(finalCounts[j],counts[j]);
        }
    }
    const result:string[] = [];
    for(let i=0;i<26;i++){
        const c = String.fromCharCode(i+97);
        for(let j=0;j<finalCounts[i];j++){
            result.push(c);
        }
    }
    return result
};