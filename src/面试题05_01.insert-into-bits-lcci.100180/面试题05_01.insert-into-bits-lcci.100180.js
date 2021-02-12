/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function(N, M, i, j) {
    let mask = ~( ((1<<(j-i+1))-1)<<i );
    return (N&mask)|(M<<i)
};