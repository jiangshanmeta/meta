/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    const list = A.reduce((totalList, word) => {
        const list = new Array(26).fill(0);
        // 统计每个单词中每个letter出现次数
        for (let i = 0; i < word.length; i++) {
            list[word.charCodeAt(i) - 97]++;
        }
        // 每个letter最终出现次数由最小出现次数决定
        for (let i = 0; i < 26; i++) {
            totalList[i] = Math.min(totalList[i], list[i]);
        }
        return totalList;
    }, new Array(26).fill(Infinity));

    const result = [];
    for (let i = 0; i < 26; i++) {
        const count = list[i];
        const letter = String.fromCharCode(i + 97);
        for (let j = 0; j < count; j++) {
            result.push(letter);
        }
    }

    return result;
};
