function minOperations(s: string): number {
    let result0 = 0;
    let result1 = 0;
    for(let i=0;i<s.length;i++){
        if(i&1){
            if(s[i] === '1'){
                result1++;
            }else{
                result0++;
            }
        }else{
            if(s[i] === '1'){
                result0++;
            }else{
                result1++;
            }
        }
    }

    return Math.min(result0,result1);
};