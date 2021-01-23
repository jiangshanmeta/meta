function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack:number[] = [];
    let index1 = 0;
    let index2 = 0;
    while(index1<pushed.length && index2<popped.length){
        while( index1<pushed.length && (stack.length === 0 || stack[stack.length-1] !== popped[index2]) ){
            stack.push(pushed[index1++]);
        }
        if(stack[stack.length-1] !== popped[index2]){
            return false;
        }else{
            stack.pop();
            index2++;
        }
    }
    while(index2<popped.length){
        if(stack[stack.length-1] !== popped[index2]){
            return false;
        }
        index2++;
        stack.pop()
    }
    return true;
};