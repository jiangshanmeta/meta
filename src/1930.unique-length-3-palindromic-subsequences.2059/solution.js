/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    let result = 0;
    const set1 = new Set();
    for (let i = 0; i < s.length; i++) {
        if (set1.has(s[i])) {
            continue;
        }
        set1.add(s[i]);
        let j = s.length - 1;
        while (j > i && s[i] !== s[j]) {
            j--;
        }
        const set2 = new Set();
        let k = i + 1;
        while (k < j) {
            if (set2.has(s[k])) {
                k++;
                continue;
            }
            result++;
            set2.add(s[k++]);
        }
    }
    return result;
};
