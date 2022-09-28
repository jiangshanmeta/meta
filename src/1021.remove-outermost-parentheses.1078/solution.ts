function removeOuterParentheses (S: string): string {
    const result:string[] = [];
    let count = 0;
    let index = 0;
    while (index < S.length) {
        if (S[index++] === '(') {
            count++;
            if (count !== 1) {
                result.push('(');
            }
        } else {
            count--;
            if (count !== 0) {
                result.push(')');
            }
        }
    }
    return result.join('');
}
