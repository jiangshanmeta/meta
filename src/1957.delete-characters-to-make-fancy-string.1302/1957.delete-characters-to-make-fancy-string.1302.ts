function makeFancyString (s: string): string {
    const result:string[] = [];
    let index = 0;
    while (index < s.length) {
        const char = s[index++];
        let count = 1;
        while (index < s.length && s[index] === char) {
            index++;
            count++;
        }
        result.push(char.repeat(Math.min(count, 2)));
    }

    return result.join('');
}
