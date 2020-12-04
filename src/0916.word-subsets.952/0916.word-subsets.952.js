/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
    // 统计在B中每个字母在每个单词出现次数最大值
    const localCountB = new Array(26).fill(0);
    const countB = new Array(26).fill(0);
    for (let i = 0; i < B.length; i++) {
        const word = B[i];
        for (let j = 0; j < word.length; j++) {
            localCountB[word.charCodeAt(j) - 97]++;
        }
        for (let j = 0; j < 26; j++) {
            countB[j] = Math.max(localCountB[j], countB[j]);
            localCountB[j] = 0;
        }
    }

    const result = [];
    const countA = new Array(26).fill(0);
    for (let i = 0; i < A.length; i++) {
        // 统计A[i]中每个字母出现次数
        const word = A[i];
        for (let j = 0; j < word.length; j++) {
            countA[word.charCodeAt(j) - 97]++;
        }
        // 判断是否是subset
        let flag = true;
        for (let j = 0; j < 26; j++) {
            if (countA[j] < countB[j]) {
                flag = false;
                break;
            }
        }
        flag && result.push(word);
        countA.fill(0);
    }

    return result;
};
