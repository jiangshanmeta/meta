function isValid (s: string): boolean {
    const stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'c') {
            if (stack.length > 1 && stack[stack.length - 1] === 'b' && stack[stack.length - 2] === 'a') {
                stack.pop();
                stack.pop();
                continue;
            }
            return false;
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}
