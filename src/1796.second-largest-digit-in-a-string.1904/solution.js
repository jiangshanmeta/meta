/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code > 47 && code < 58) {
            set.add(+s[i]);
        }
    }
    const seq = [...set, ].sort((a, b) => b - a);
    if (seq.length < 2) {
        return -1;
    }
    return seq[1];
};
