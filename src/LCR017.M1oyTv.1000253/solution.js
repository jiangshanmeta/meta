/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
    const map = {};
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] === undefined) {
            map[t[i]] = 1;
            count++;
        } else {
            map[t[i]]++;
        }
    }
    let left = 0;
    let right = -1;
    let result = '';
    while (right < s.length) {
        if (count === 0) {
            if (result === '' || right - left + 1 < result.length) {
                result = s.substring(left, right + 1);
            }
            if (map[s[left]] !== undefined) {
                map[s[left]]++;
                if (map[s[left]] === 1) {
                    count++;
                }
            }
            left++;
        } else {
            right++;
            if (right < s.length && map[s[right]] !== undefined) {
                map[s[right]]--;
                if (map[s[right]] === 0) {
                    count--;
                }
            }
        }
    }
    return result;
};
