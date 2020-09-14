/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(matchItem(queries[i], pattern));
    }
    return result;
};

function matchItem (word, pattern) {
    // index1是pattern的下标
    // index2是word的下标
    let index1 = 0;
    let index2 = 0;
    while (index1 < pattern.length && index2 < word.length) {
        if (pattern[index1] === word[index2]) {
            // 两个letter相同 共同向后一位
            index1++;
            index2++;
        } else {
            // 不同的情况 word对应的letter应该是小写
            const wordCode = word.charCodeAt(index2);
            if (wordCode < 91) {
                return false;
            }
            index2++;
        }
    }
    // pattern还有剩余letter没匹配 但是word已匹配完 匹配失败
    if (index1 < pattern.length) {
        return false;
    }
    // word中还剩余大写字母 匹配失败
    while (index2 < word.length) {
        if (word.charCodeAt(index2) < 91) {
            return false;
        }
        index2++;
    }
    return true;
}
