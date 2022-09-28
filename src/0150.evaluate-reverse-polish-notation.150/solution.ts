function evalRPN (tokens: string[]): number {
    const stack:number[] = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a + b);
        } else if (tokens[i] === '-') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
        } else if (tokens[i] === '*') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a * b);
        } else if (tokens[i] === '/') {
            const b = stack.pop();
            const a = stack.pop();
            const r = a / b;
            if (r < 0) {
                stack.push(Math.ceil(r));
            } else {
                stack.push(Math.floor(r));
            }
        } else {
            stack.push(+tokens[i]);
        }
    }
    return stack.pop();
}
