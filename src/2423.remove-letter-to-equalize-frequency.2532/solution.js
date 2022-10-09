/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    const frequency = new Array(26).fill(0);
    for (const c of word) {
        frequency[c.charCodeAt(0) - 97]++;
    }
    const map = new Map();
    for (const f of frequency) {
        if (f === 0) {
            continue;
        }
        if (map.has(f)) {
            map.set(f, map.get(f) + 1);
        } else {
            map.set(f, 1);
        }
    }
    const entries = [...map.entries(), ].sort((a, b) => b[0] - a[0]);

    if (entries.length > 2) {
        return false;
    }
    if (entries.length === 2) {
        return (entries[0][1] === 1 && entries[0][0] - entries[1][0] === 1) || (entries[1][1] === 1 && entries[1][0] === 1);
    }

    return entries[0][0] === 1 || entries[0][1] === 1;
};
