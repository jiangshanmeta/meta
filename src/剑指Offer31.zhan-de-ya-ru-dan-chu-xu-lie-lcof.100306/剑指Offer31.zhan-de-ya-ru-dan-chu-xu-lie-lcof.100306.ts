function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack:number[] = [];
    let index1 = 0;
    let index2 = 0;
    while(index2<popped.length){
        while(stack.length === 0 || (stack[stack.length-1] !== popped[index2] && index1<pushed.length)){
            stack.push(pushed[index1++]);
        }
        if(stack[stack.length-1] !== popped[index2]){
            return false;
        }
        stack.pop();
        index2++;
    }
    return true;
};