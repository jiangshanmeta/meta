function isValid(s: string): boolean {
    const stack:string[] = [];
    const leftSet = new Set(['(','{','[']);
    const right2left = new Map([
        ['}','{'],
        [']','['],
        [')','(']
    ])
    for(let i=0;i<s.length;i++){
        if(leftSet.has(s[i])){
            stack.push(s[i]);
        }else if(stack.length === 0 || stack[stack.length-1] !== right2left.get(s[i])){
            return false;
        }else{
            stack.pop();
        }
    }
    return stack.length === 0;
};

