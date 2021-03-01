function countHomogenous(s: string): number {
    let result = 0;
    let index = 0;
    const mod = 10**9+7;
    while(index<s.length){
        const start = index;
        const c = s[index++];
        while(index<s.length && s[index] === c){
            index++;
        }
        const count = index-start;
        result = (result+ count*(count+1)/2)%mod;
    }
    return result;
};