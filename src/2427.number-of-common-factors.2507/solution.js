/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    const MAX = gcd(a, b);
    let result = 1;
    for (let i = 2; i <= MAX; i++) {
        if (a % i === 0 && b % i === 0) {
            result++;
        }
    }
    return result;
};

function gcd (a, b) {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
