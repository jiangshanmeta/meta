/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        if (checkEven(i)) {
            result++;
        }
    }
    return result;
};

function checkEven (num) {
    let sum = 0;
    while (num) {
        const digit = num % 10;
        sum += digit;
        num = (num - digit) / 10;
    }
    return sum % 2 === 0;
}
