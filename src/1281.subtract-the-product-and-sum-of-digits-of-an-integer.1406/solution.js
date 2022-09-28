/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let sum = 0;
    let product = 1;
    while (n) {
        const digit = n % 10;
        sum += digit;
        product *= digit;
        n = (n - digit) / 10;
    }
    return product - sum;
};
