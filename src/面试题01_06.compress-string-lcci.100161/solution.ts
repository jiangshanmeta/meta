function compressString (S: string): string {
    const result:Array<string|number> = [];
    let index = 0;
    while (index < S.length) {
        const c = S[index++];
        let count = 1;
        while (index < S.length && S[index] === c) {
            index++;
            count++;
        }
        result.push(c);
        result.push(count);
    }
    const encodedS = result.join('');
    return encodedS.length < S.length ? encodedS : S;
}
