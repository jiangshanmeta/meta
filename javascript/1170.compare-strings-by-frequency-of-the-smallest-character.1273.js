/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
    const fwords = new Array(words.length);
    for (let i = 0; i < words.length; i++) {
        fwords[i] = f(words[i]);
    }
    fwords.sort((a, b) => a - b);
    const result = new Array(queries.length);
    const cache = {};
    for (let i = 0; i < queries.length; i++) {
        const count = f(queries[i]);
        if (cache[count] !== undefined) {
            result[i] = cache[count];
        } else {
            // 利用二分查找有多少大于的
            let low = 0;
            let high = words.length - 1;
            let index = words.length;
            while (low <= high) {
                const mid = (low + high) >> 1;
                if (fwords[mid] > count) {
                    index = Math.min(index, mid);
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            result[i] = words.length - index;
            cache[count] = result[i];
        }
    }

    return result;
};
// 题目中所说的f函数
function f (word) {
    let char = 'z';
    let count = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] < char) {
            char = word[j];
            count = 1;
        } else if (word[j] === char) {
            count++;
        }
    }
    return count;
}
