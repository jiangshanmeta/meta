/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
    if (n === 1) {
        return ['0', '1', '8', ];
    }
    let seq = [];
    let base = 0;
    if (n & 1) {
        seq = ['0', '1', '8', ];
        base = 1;
    } else {
        seq = ['', ];
    }
    while (base < n) {
        const nSeq = [];
        for (let i = 0; i < seq.length; i++) {
            if (base + 2 < n) {
                nSeq.push(`0${seq[i]}0`);
            }
            nSeq.push(`1${seq[i]}1`);
            nSeq.push(`6${seq[i]}9`);
            nSeq.push(`8${seq[i]}8`);
            nSeq.push(`9${seq[i]}6`);
        }
        seq = nSeq;
        base += 2;
    }
    return seq.sort();
};
