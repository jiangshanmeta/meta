/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
    const M = words.length;
    if (!M) {
        return true;
    }
    const N = Math.max(...words.map(item => item.length));
    if (M !== N) {
        return false;
    }
    for (let i = 0; i < M; i++) {
        const sub = [];
        for (let j = 0; j < M; j++) {
            if (words[j][i]) {
                sub.push(words[j][i]);
            }
        }

        if (sub.join('') !== words[i]) {
            return false;
        }
    }
    return true;
};
