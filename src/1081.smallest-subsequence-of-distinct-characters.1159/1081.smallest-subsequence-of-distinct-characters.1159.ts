function smallestSubsequence(s: string): string {
    const counts:number[] = new Array(26).fill(0);
    const visited:boolean[] = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]++;
    }
    const stack:string[] = [];
    for(let i=0;i<s.length;i++){
        const c = s[i];
        const code = c.charCodeAt(0)-97;
        if(!visited[code]){
            while(stack.length && c<stack[stack.length-1] && counts[stack[stack.length-1].charCodeAt(0)-97]){
                visited[stack.pop().charCodeAt(0)-97] = false;
            }
            visited[code] = true;
            stack.push(c)
        }
        counts[code]--;
    }
    return stack.join('')
};