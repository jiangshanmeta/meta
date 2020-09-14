/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
    return compare(s1, s2) || compare(s2, s1);
};

function compare (a, b) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < a.length; i++) {
        counts[a.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < b.length; i++) {
        const code = b.charCodeAt(i) - 97;
        let index = -1;
        for (let j = code; j < 26; j++) {
            if (counts[j] > 0) {
                index = j;
                counts[j]--;
                break;
            }
        }
        if (index === -1) {
            return false;
        }
    }
    return true;
}
