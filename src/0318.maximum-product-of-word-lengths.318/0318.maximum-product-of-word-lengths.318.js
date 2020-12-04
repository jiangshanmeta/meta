/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    const xors = words.map((word) => {
        // 统计哪些字母用过了
        const lists = new Array(26);
        for (let i = 0; i < word.length; i++) {
            lists[word.charCodeAt(i) - 97] = true;
        }
        // 转换为一个数字 方便后面位运算
        let num = 0;
        for (let i = 0; i < 26; i++) {
            num = num * 2 + (lists[i] ? 1 : 0);
        }
        return num;
    });
    let result = 0;
    for (let i = 1; i < xors.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((xors[i] & xors[j]) === 0) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }
    return result;
};
