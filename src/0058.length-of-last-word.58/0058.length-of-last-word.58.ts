function lengthOfLastWord(s: string): number {
    let result = 0;
    let index = s.length-1;
    while(index>-1 && s[index] === ' '){
        index--;
    }
    while(index>-1 && s[index] !== ' '){
        result++;
        index--;
    }
    return result
};