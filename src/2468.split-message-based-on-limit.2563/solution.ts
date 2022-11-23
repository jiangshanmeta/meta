function splitMessage (message: string, limit: number): string[] {
    for (let i = 1; i <= message.length; i++) {
        const L = i.toString().length;
        if (2 * L + 3 >= limit) {
            break;
        }

        const extra = calcExtraLength(i);
        const total = message.length + extra;

        if (total <= limit * i && total > (i - 1) * limit) {
            let start = 0;
            const result = [];
            for (let j = 1; j <= i; j++) {
                const suffix = `<${j}/${i}>`;
                const restL = limit - suffix.length;
                result.push(message.slice(start, start + restL) + suffix);

                start += restL;
            }
            return result;
        }
    }
    return [];
}

function calcExtraLength (n:number) {
    const L = n.toString().length;
    let result = 3 * n + n * L;
    for (let i = 1; i < L; i++) {
        result += 9 * (10 ** (i - 1)) * i;
    }

    return result + (n - 10 ** (L - 1) + 1) * L;
}
