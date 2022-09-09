function replaceDigits (s: string): string {
    const result:string[] = [];
    for (let i = 0; i < s.length; i += 2) {
        result.push(s[i]);
        if (i + 1 < s.length) {
            result.push(shift(s[i], +s[i + 1]));
        }
    }
    return result.join('');
}

function shift (c:string, x:number) {
    return String.fromCharCode(c.charCodeAt(0) + x);
}
