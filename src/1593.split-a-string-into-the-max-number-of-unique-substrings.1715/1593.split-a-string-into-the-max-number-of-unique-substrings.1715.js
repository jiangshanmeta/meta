/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    return backTracking(s, new Set(), 0, 0);
};

function backTracking (s, set, start, count) {
    if (start === s.length) {
        return count;
    }
    let result = 0;
    for (let end = start; end < s.length; end++) {
        const sub = s.slice(start, end + 1);
        if (set.has(sub)) {
            continue;
        }
        set.add(sub);
        result = Math.max(result, backTracking(s, set, end + 1, count + 1));
        set.delete(sub);
    }
    return result;
}
