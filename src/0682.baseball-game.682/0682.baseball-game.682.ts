function calPoints (ops: string[]): number {
    const stack:number[] = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (ops[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (ops[i] === 'C') {
            stack.pop();
        } else {
            stack.push(+ops[i]);
        }
    }
    return stack.reduce((sum, item) => {
        return sum + item;
    }, 0);
}
