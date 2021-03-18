function detectCapitalUse(word: string): boolean {
    const firstIsUpper = word.charCodeAt(0)<91;
    if(firstIsUpper){
        if(word.length === 1){
            return true;
        }
        const secondIsUpper = word.charCodeAt(1)<91;
        if(secondIsUpper){
            for(let i=2;i<word.length;i++){
                if(word.charCodeAt(i)>90){
                    return false;
                }
            }
        }else{
            for(let i=2;i<word.length;i++){
                if(word.charCodeAt(i)<91){
                    return false
                }
            }
        }
    }else{
        for(let i=1;i<word.length;i++){
            if(word.charCodeAt(i)<91){
                return false;
            }
        }
    }
    return true;
};