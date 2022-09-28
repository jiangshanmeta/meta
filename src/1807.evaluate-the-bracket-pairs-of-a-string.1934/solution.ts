function evaluate (s: string, knowledge: string[][]): string {
    const map = new Map<string, string>();
    for (const [key, val, ] of knowledge) {
        map.set(key, val);
    }
    const result:string[] = [];
    let index = 0;
    while (index < s.length) {
        if (s[index] !== '(') {
            result.push(s[index++]);
            continue;
        }
        const start = ++index;
        while (index < s.length && s[index] !== ')') {
            index++;
        }
        const word = s.slice(start, index);
        result.push(map.has(word) ? map.get(word) : '?');
        index++;
    }

    return result.join('');
}
