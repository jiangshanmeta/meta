function canConstruct(ransomNote: string, magazine: string): boolean {
    const counts:number[] = new Array(26).fill(0);
    for(let i=0;i<magazine.length;i++){
        counts[magazine.charCodeAt(i)-97]++;        
    }
    for(let i=0;i<ransomNote.length;i++){
        const code = ransomNote.charCodeAt(i)-97;
        if(counts[code] === 0){
            return false;
        }
        counts[code]--;
    }
    return true;
};