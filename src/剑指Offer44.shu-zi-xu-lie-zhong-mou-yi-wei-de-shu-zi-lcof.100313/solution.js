/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let digit = 1;
    let a = 9;
    while (n - a * digit > 0) {
        n -= a * digit;
        a *= 10;
        digit++;
    }
    a /= 9;
    n--;
    return (a + (n / digit | 0)).toString()[n % digit];
};
