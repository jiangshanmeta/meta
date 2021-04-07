/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    const diff = Math.abs(s.length - t.length);
    if (diff > 1) {
        return false;
    }
    if (s.length === t.length) {
        let changed = false;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === t[i]) {
                continue;
            }
            if (changed) {
                return false;
            }
            changed = true;
        }
        return changed;
    }

    if (t.length > s.length) {
        const tmp = t;
        t = s;
        s = tmp;
    }
    let index1 = 0;
    let index2 = 0;
    while (index1 < s.length && index2 < t.length) {
        if (s[index1] === t[index2]) {
            index1++;
            index2++;
            continue;
        }
        if (index1 !== index2) {
            return false;
        }

        index1++;
    }

    return true;
};
