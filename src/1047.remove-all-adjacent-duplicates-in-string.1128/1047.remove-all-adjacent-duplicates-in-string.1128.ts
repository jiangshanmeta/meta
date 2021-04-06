function removeDuplicates (S: string): string {
    const stack:string[] = [];
    for (let i = 0; i < S.length; i++) {
        if (stack.length && stack[stack.length - 1] === S[i]) {
            stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    return stack.join('');
}
