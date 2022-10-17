function makeGood (s: string): string {
    const stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }
        const code = s.charCodeAt(i);
        if (code < 97) {
            if (stack[stack.length - 1] === s[i].toLowerCase()) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            if (stack[stack.length - 1] === s[i].toUpperCase()) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    return stack.join('');
}
