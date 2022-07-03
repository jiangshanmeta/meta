function largestInteger (num: number): number {
    const odds:number[] = [];
    const evens:number[] = [];
    const seq = [];
    while (num) {
        const digit = num % 10;
        if (digit & 1) {
            odds.push(digit);
        } else {
            evens.push(digit);
        }
        num = (num - digit) / 10;
        seq.push(digit);
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => b - a);
    seq.reverse();
    let indexO = 0;
    let indexE = 0;
    let index = 0;
    while (index < seq.length) {
        if (seq[index] & 1) {
            seq[index++] = odds[indexO++];
        } else {
            seq[index++] = evens[indexE++];
        }
    }

    return seq.reduce((acc, item) => {
        return acc * 10 + item;
    }, 0);
}
