/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    let hasOdd = false;
    let oddChar = '';
    const evenWords = [];
    const evenCounts = [];

    const chars = Object.keys(map);
    for (let i = 0; i < chars.length; i++) {
        const count = map[chars[i]];
        if (count & 1) {
            if (hasOdd) {
                return [];
            }
            hasOdd = true;
            oddChar = chars[i];
            if (count > 1) {
                evenWords.push(chars[i]);
                evenCounts.push(count - 1);
            }
        } else {
            evenWords.push(chars[i]);
            evenCounts.push(count);
        }
    }

    const candidates = [];
    for (let i = 0; i < evenWords.length; i++) {
        for (let j = 0; j < evenCounts[i] / 2; j++) {
            candidates.push(evenWords[i]);
        }
    }
    const used = new Array(candidates.length).fill(false);
    const result = [];
    backTracking(candidates, used, oddChar, result);
    return result;
};

function backTracking (candidates, used, current, result) {
    if (current.length >= candidates.length * 2) {
        result.push(current);
        return;
    }
    for (let i = 0; i < candidates.length; i++) {
        if (used[i]) {
            continue;
        }
        if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) {
            continue;
        }
        used[i] = true;
        backTracking(candidates, used, `${candidates[i]}${current}${candidates[i]}`, result);
        used[i] = false;
    }
}
