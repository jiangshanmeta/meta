function reverseWords(s: string): string {
    const seq:string[] = [];
    let index = 0;
    while(index<s.length){
        while(index<s.length && s[index] === ' '){
            index++;
        }
        if(index === s.length){
            break;
        }
        const word:string[] = [];
        while(index<s.length && s[index] !== ' '){
            word.push(s[index++]);
        }
        seq.push(word.join(''));
    }

    return seq.reverse().join(' ')
};