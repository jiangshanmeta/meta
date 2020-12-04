function isSubsequence(s: string, t: string): boolean {
    let indexS:number = 0;
    let indexT:number = 0;
    while(indexS<s.length && indexT<t.length){
        if(s[indexS] === t[indexT]){
            indexS++;
            indexT++;
        }else{
            indexT++;
        }
    }
    return indexS === s.length;
};