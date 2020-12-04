function canPermutePalindrome(s: string): boolean {
    const map = new Map<string,boolean>();
    for(let i=0;i<s.length;i++){
        const char = s[i];
        if(map.has(char)){
            map.set(char,!<boolean>map.get(char));
        }else{
            map.set(char,true);
        }
    }
    let hasOdd:boolean = false;
    for(let isOdd of map.values()){
        if(isOdd){
            if(hasOdd){
                return false;
            }
            hasOdd = true
        }
    }
    return true;
};