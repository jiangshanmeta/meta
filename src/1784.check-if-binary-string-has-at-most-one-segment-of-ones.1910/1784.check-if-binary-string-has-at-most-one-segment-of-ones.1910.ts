function checkOnesSegment (s: string): boolean {
    let index = 0;
    while (index < s.length && s[index] === '1') {
        index++;
    }
    while (index < s.length && s[index] === '0') {
        index++;
    }
    return index === s.length;
}
