function smallestSubsequence(s: string, k: number, letter: string, repetition: number): string {
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === letter){
            count++
        }
    }
    const stack:string[] = [];
    let inStackCount = 0;
    for(let i=0;i<s.length;i++){
        while(stack.length && s[i]<stack[stack.length-1] && (stack.length+s.length-i>k) ){
            const last = stack[stack.length-1];
            if(last === letter && inStackCount-1+count<repetition ){
                break;
            }
            stack.pop();
            if(last === letter){
                inStackCount--;
            }
        }
        stack.push(s[i]);
        if(s[i] === letter){
            inStackCount++;
            count--;
        }
    }

    while(inStackCount>repetition && stack.length>k){
        const last = stack.pop()!;
        if(last === letter){
            inStackCount--;
        }
    }

    let diff = stack.length-k;
    const out = new Array<boolean>(stack.length);
    let index = stack.length-1;
    while(diff>0){
        if(stack[index] !== letter){
            out[index] = true;
            diff--
        }
        index--;
    }

    const result:string[] = [];
    for(let i=0;i<stack.length;i++){
        if(out[i]){
            continue;
        }
        result.push(stack[i])
    }

    return result.join('')
};