/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }

    const used = new Array(26).fill(false);
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        if (!used[code]) {
            while (result.length && result[result.length - 1] > s[i]) {
                const prevCode = result[result.length - 1].charCodeAt(0) - 97;
                if (counts[prevCode] > 0) {
                    used[prevCode] = false;
                    result.pop();
                } else {
                    break;
                }
            }
            result.push(s[i]);
            used[code] = true;
        }
        counts[code]--;
    }
    return result.join('');
};
