function executeInstructions (n: number, startPos: number[], s: string): number[] {
    const move = (index:number) => {
        let [r, c, ] = startPos;
        let result = 0;
        while (index < s.length) {
            if (s[index] === 'R') {
                if (c === n - 1) {
                    break;
                }
                c++;
                result++;
            } else if (s[index] === 'L') {
                if (c === 0) {
                    break;
                }
                c--;
                result++;
            } else if (s[index] === 'U') {
                if (r === 0) {
                    break;
                }
                r--;
                result++;
            } else {
                if (r === n - 1) {
                    break;
                }
                r++;
                result++;
            }
            index++;
        }
        return result;
    };

    const result = new Array<number>(s.length);
    for (let i = 0; i < s.length; i++) {
        result[i] = move(i);
    }
    return result;
}
