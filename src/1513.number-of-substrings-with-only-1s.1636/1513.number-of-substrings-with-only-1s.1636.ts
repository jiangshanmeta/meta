function numSub(s: string): number {
    let result = 0;
    const mod = 10**9+7;
    let index = 0;
    
    while(index<s.length){
        if(s[index] === '0'){
            index++;
            continue;
        }
        let count = 0;
        while(index<s.length && s[index] === '1'){
            count++;
            index++;
        }

        result = (result+count*(count+1)/2)%mod;
    }
    return result
};