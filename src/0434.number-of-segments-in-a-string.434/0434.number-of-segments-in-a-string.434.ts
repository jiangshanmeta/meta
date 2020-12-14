function countSegments(s: string): number {
    let result = 0;
    let index = 0;
    while(index<s.length){
        if(s[index] === ' '){
            index++;
            continue;
        }
        result++;
        while(index<s.length && s[index] !== ' '){
            index++;
        }
    }
    return result
};