function replaceSpaces (S: string, length: number): string {
    const result:string[] = [];
    for (let i = 0; i < length; i++) {
        if (S[i] === ' ') {
            result.push('%20');
        } else {
            result.push(S[i]);
        }
    }
    return result.join('');
}
