function smallestString (s: string): string {
    let start = 0;
    while (start < s.length && s[start] === 'a') {
        start++;
    }
    if (start === s.length) {
        return 'a'.repeat(s.length - 1) + 'z';
    }
    let index = start + 1;
    while (index < s.length && s[index] !== 'a') {
        index++;
    }

    return s.slice(0, start) + smaller(s.slice(start, index)) + s.slice(index);
}

function smaller (s:string) {
    return s.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('');
}
