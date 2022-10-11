function scoreOfParentheses (s: string): number {
    let index = 0;
    const parse = () => {
        if (s[index + 1] === ')') {
            index += 2;
            return 1;
        }
        let result = 0;
        index++;
        while (s[index] === '(') {
            result += parse();
        }
        index++;
        return 2 * result;
    };
    let result = 0;
    while (index < s.length) {
        result += parse();
    }

    return result;
}
