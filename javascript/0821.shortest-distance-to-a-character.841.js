/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    const result = new Array(S.length);
    const indexs = [];
    // 记录所有为C的位置
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            indexs.push(i);
            result[i] = 0;
        }
    }

    // 在两个C位之间的
    for (let i = 0; i < indexs.length - 1; i++) {
        let index1 = indexs[i] + 1;
        let index2 = indexs[i + 1] - 1;
        let count = 1;
        while (index1 <= index2) {
            result[index1] = count;
            result[index2] = count;
            count++;
            index1++;
            index2--;
        }
    }

    // 最左侧元素
    let count = 1;
    let index1 = indexs[0] - 1;
    while (index1 > -1) {
        result[index1] = count;
        index1--;
        count++;
    }

    // 最右侧元素
    count = 1;
    index1 = indexs[indexs.length - 1] + 1;
    while (index1 < S.length) {
        result[index1] = count;
        index1++;
        count++;
    }

    return result;
};
