/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    const seq = [];
    const odds = [];
    const evens = [];
    while (num) {
        const digit = num % 10;
        if (digit & 1) {
            odds.push(digit);
        } else {
            evens.push(digit);
        }
        seq.push(digit);
        num = (num - digit) / 10;
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => b - a);
    seq.reverse();
    let indexO = 0;
    let indexE = 0;
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] & 1) {
            seq[i] = odds[indexO++];
        } else {
            seq[i] = evens[indexE++];
        }
    }

    return seq.reduce((acc, item) => {
        return acc * 10 + item;
    }, 0);
};
