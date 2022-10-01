/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
    const counts = new Array(10).fill(0);
    for (const c of num) {
        counts[c]++;
    }
    let prefix = '';
    let suffix = '';
    let maxAlone = -1;
    for (let i = 9; i > -1; i--) {
        if (i === 0 && prefix === '') {
            if (maxAlone !== -1) {
                return String(maxAlone);
            }
            return '0';
        }
        const half = counts[i] >> 1;
        prefix = `${prefix}${String(i).repeat(half)}`;
        suffix = `${String(i).repeat(half)}${suffix}`;
        if (maxAlone === -1 && counts[i] % 2 === 1) {
            maxAlone = i;
        }
    }
    if (maxAlone !== -1) {
        return `${prefix}${maxAlone}${suffix}`;
    }
    return `${prefix}${suffix}`;
};
