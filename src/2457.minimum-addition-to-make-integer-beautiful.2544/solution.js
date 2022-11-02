/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
    let base = n;
    const digits = [];
    let sum = 0;
    while (base > 0) {
        const digit = base % 10;
        sum += digit;
        digits.push(digit);
        base = (base - digit) / 10;
    }
    let index = 0;
    while (sum > target) {
        const digit = digits[index];
        sum -= digit;
        digits[index++] = 0;
        let j = index;
        while (true) {
            if (j === digits.length) {
                digits.push(0);
            }
            if (digits[j] < 9) {
                digits[j]++;
                sum++;
                break;
            } else {
                sum -= digits[j];
                digits[j++] = 0;
            }
        }
    }
    return digits.reduce((sum, item, index) => {
        return sum + item * (10 ** index);
    }, 0) - n;
};
