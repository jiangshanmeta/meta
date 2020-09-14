/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let count = 0;
    while (n > 1) {
        if ((n & 1) === 0) {
            count++;
            n >>>= 1;
        } else {
            const m = n >>> 1;
            if (m > 1 && (m & 1) === 1) {
                count++;
                n++;
            } else {
                n = m;
                count += 2;
            }
        }
    }
    return count;
};
