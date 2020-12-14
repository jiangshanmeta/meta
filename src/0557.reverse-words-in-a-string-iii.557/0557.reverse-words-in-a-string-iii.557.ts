function reverseWords(s: string): string {
    const result:string[] = [];
    const stack:string[] = [];
    let index = 0;
    while(index<s.length){
        if(s[index] === ' '){
            result.push(s[index++]);
            continue;
        }
        while(index<s.length && s[index] !== ' '){
            stack.push(s[index++]);
        }
        while(stack.length>0){
            result.push(stack.pop()!);
        }
    }
    return result.join('')
};