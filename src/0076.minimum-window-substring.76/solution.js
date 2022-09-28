/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 滑动窗口
var minWindow = function (s, t) {
    // map[key] 需要覆盖的字符key的数量
    const map = {};
    // count 未覆盖的字符的数量
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
            // 窗口左侧右移
            // 仅需考虑t拥有的字符
            if (map[s[left]] !== undefined) {
                map[s[left]]++;
                // 这个字符由可以覆盖变为不能覆盖
                if (map[s[left]] === 1) {
                    count++;
                }
            }

            left++;
        } else {
            // 无法覆盖 扩大窗口范围
            right++;
            // 只需要关系t中拥有的字符
            if (right < s.length && map[s[right]] !== undefined) {
                map[s[right]]--;
                // 这个字符恰好够用了
                if (map[s[right]] === 0) {
                    count--;
                }
            }
        }
    }
    return result;
};
