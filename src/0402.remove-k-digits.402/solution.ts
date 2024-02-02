function removeKdigits(num: string, k: number): string {
    const stack:string[] = [];
    for(let i=0;i<num.length;i++){
        while(stack.length && k>0 && num[i]<stack[stack.length-1] ){
            k--;
            stack.pop();
        }
        stack.push(num[i]);
    }
    while(k>0){
        stack.pop()
        k--;
    }
    let index = stack.findIndex(item=>item !== '0');
    if(index === -1){
        return '0'
    }

    return stack.slice(index).join('')
};