/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
    const counts = new Array(26);
    for (let i = 0; i < 26; i++) {
        counts[i] = new Array(s.length + 1).fill(0);
    }
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97][i + 1] = 1;
    }
    for (let i = 0; i < 26; i++) {
        for (let j = 2; j < s.length + 1; j++) {
            counts[i][j] += counts[i][j - 1];
        }
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let maxFre = 0;
            let minFre = j + 1;
            for (let k = 0; k < 26; k++) {
                const count = counts[k][j + 1] - counts[k][i];
                if (count === 0) {
                    continue;
                }
                maxFre = Math.max(maxFre, count);
                minFre = Math.min(minFre, count);
            }

            result += maxFre - minFre;
        }
    }
    return result;
};
