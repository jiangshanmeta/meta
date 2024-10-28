function clearDigits (s: string): string {
    const stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (stack.length === 0 || code < 48 || code > 57) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
}
