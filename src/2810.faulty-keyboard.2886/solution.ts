function finalString (s: string): string {
    const result:string[] = [];
    let append = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            append = !append;
        } else if (append) {
            result.push(s[i]);
        } else {
            result.unshift(s[i]);
        }
    }
    if (!append) {
        result.reverse();
    }
    return result.join('');
}
