/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
    const seq = [1, ];
    let index3 = 0;
    let index5 = 0;
    let index7 = 0;
    while (seq.length < k) {
        const node = Math.min(seq[index3] * 3, seq[index5] * 5, seq[index7] * 7);
        seq.push(node);
        while (index3 < seq.length && seq[index3] * 3 <= node) {
            index3++;
        }
        while (index5 < seq.length && seq[index5] * 5 <= node) {
            index5++;
        }
        while (index7 < seq.length && seq[index7] * 7 <= node) {
            index7++;
        }
    }
    return seq[k - 1];
};
