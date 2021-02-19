function maxDepth(s: string): number {
    let result = 0;
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            count++;
            result = Math.max(result,count);
        }else if(s[i] === ')'){
            count--;
        }
    }
    return result;
};