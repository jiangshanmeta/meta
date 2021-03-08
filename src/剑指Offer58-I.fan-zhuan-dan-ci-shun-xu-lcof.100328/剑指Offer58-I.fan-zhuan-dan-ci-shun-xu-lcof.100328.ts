function reverseWords(s: string): string {
    const result:string[] = [];
    let index = 0;
    while(index<s.length){
        if(s[index] === ' '){
            index++;
            continue;
        }
        const tmp:string[] = [];
        while(index<s.length && s[index] !== ' '){
            tmp.push(s[index++]);
        }
        result.push(tmp.join(''));
    }

    return result.reverse().join(' ')
};