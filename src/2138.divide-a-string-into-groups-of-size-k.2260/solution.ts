function divideString (s: string, k: number, fill: string): string[] {
    const result = [];
    const tmp = [];
    for (const c of s) {
        tmp.push(c);
        if (tmp.length === k) {
            result.push(tmp.join(''));
            tmp.length = 0;
        }
    }
    if (tmp.length) {
        result.push(tmp.join('') + fill.repeat(k - tmp.length));
    }

    return result;
}
