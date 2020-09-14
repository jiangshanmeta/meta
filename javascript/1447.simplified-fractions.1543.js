/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (gcd(i, j) === 1) {
                result.push(`${j}/${i}`);
            }
        }
    }
    return result;
};
function gcd (a, b) {
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
