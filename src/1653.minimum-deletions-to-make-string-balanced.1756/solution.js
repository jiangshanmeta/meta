/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let lastA = 0;
    let lastB = 0;
    for (let i = 0; i < s.length; i++) {
        let nextA = Infinity;
        let nextB = Infinity;
        if (s[i] === 'a') {
            nextA = lastA;
            nextB = lastB + 1;
        } else {
            nextA = lastA + 1;
            nextB = Math.min(lastA, lastB);
        }
        lastA = nextA;
        lastB = nextB;
    }
    return Math.min(lastA, lastB);
};
