/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function (S, N) {
    for (let i = (N >> 1) + 1; i <= N; i++) {
        if (!S.includes(i.toString(2))) {
            return false;
        }
    }
    return true;
};
