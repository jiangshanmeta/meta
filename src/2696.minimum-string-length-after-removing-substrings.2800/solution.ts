function minLength (s: string): number {
    const stack:string[] = [];
    for (const c of s) {
        if (stack.length > 0) {
            if (c === 'B' && stack[stack.length - 1] === 'A') {
                stack.pop();
                continue;
            }
            if (c === 'D' && stack[stack.length - 1] === 'C') {
                stack.pop();
                continue;
            }
        }
        stack.push(c);
    }
    return stack.length;
}
