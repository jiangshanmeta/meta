function removeOccurrences (s: string, part: string): string {
    const stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (stack.length < part.length) {
            continue;
        }
        let match = true;
        let k = stack.length - 1;
        for (let j = part.length - 1; j > -1; j--) {
            if (part[j] !== stack[k--]) {
                match = false;
                break;
            }
        }
        if (match) {
            stack.length -= part.length;
        }
    }
    return stack.join('');
}
