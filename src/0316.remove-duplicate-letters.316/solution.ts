function removeDuplicateLetters (s: string): string {
    const counts:number[] = new Array(26).fill(0);
    const visited:boolean[] = new Array(26).fill(false);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    const stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const code = c.charCodeAt(0) - 97;
        if (!visited[code]) {
            while (stack.length && c <= stack[stack.length - 1] && counts[stack[stack.length - 1].charCodeAt(0) - 97]) {
                const code2 = stack.pop().charCodeAt(0) - 97;
                visited[code2] = false;
            }
            visited[code] = true;
            stack.push(c);
        }
        counts[code]--;
    }
    return stack.join('');
}


function removeDuplicateLetters2(s: string): string {
    const counts = new Array<number>(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]++;
    }

    const stack:string[] = [];
    const inStack = new Array<boolean>(26);
    for(let i=0;i<s.length;i++){
        const code = s.charCodeAt(i)-97;
        counts[code]--;
        if(inStack[code]){
            continue;
        }
        while(stack.length){
            const last = stack[stack.length-1];
            const lastCode = last.charCodeAt(0)-97;
            if(lastCode>code && counts[lastCode]>0){
                stack.pop();
                inStack[lastCode] = false;
            }else{
                break;
            }
        }
        stack.push(s[i]);
        inStack[code] = true;
    }
    return stack.join('');
};