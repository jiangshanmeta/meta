function maximumOddBinaryNumber (s: string): string {
    let c = 0;
    for (const a of s) {
        if (a === '1') {
            c++;
        }
    }
    const result = new Array<string>(s.length).fill('0');
    result[result.length - 1] = '1';
    c--;
    while (c > 0) {
        c--;
        result[c] = '1';
    }
    return result.join('');
}
