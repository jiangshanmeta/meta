function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const counts:number[] = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]++;
    }
    for(let i=0;i<t.length;i++){
        const code = t.charCodeAt(i)-97;
        if(counts[code] === 0){
            return false;
        }
        counts[code]--;
    }
    return true;
};