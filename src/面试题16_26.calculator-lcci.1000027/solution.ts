function calculate (s: string): number {
    const operations:string[] = [];
    const values:number[] = [];
    let index = 0;
    const set = new Set('0123456789');
    while (index < s.length) {
        if (s[index] === ' ') {
            index++;
            continue;
        }
        if (s[index] === '+' || s[index] === '-' || s[index] === '*' || s[index] === '/') {
            operations.push(s[index++]);
            continue;
        }
        let val = 0;
        while (index < s.length && set.has(s[index])) {
            val = val * 10 + (+s[index++]);
        }
        if (operations.length > 0 && (operations[operations.length - 1] === '*' || operations[operations.length - 1] === '/')) {
            const op = operations.pop()!;
            const prevVal = values.pop()!;
            if (op === '*') {
                values.push(prevVal * val);
            } else {
                values.push(Math.floor(prevVal / val));
            }
        } else {
            values.push(val);
        }
    }

    index = 1;
    for (const op of operations) {
        const b = values[index++];
        if (op === '+') {
            values[0] = values[0] + b;
        } else if (op === '-') {
            values[0] = values[0] - b;
        }
    }

    return values[0];
}
