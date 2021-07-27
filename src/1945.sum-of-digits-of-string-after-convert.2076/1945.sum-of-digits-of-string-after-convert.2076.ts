function getLucky (s: string, k: number): number {
    let result = transform1(s);
    while (k--) {
        result = transform2(result);
    }
    return +result;
}

function transform1 (s:string) {
    const result:number[] = [];
    for (let i = 0; i < s.length; i++) {
        result.push(s.charCodeAt(i) - 96);
    }
    return result.join('');
}

function transform2 (s:string) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result += (+s[i]);
    }
    return String(result);
}
