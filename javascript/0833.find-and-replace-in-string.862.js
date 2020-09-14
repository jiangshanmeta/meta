/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
// 按照题目说的直接做就好了
var findReplaceString = function (S, indexes, sources, targets) {
    const replaceIndexs = [];
    const indexSourceLengthMap = [];
    const indexTargetMap = [];
    for (let i = 0; i < indexes.length; i++) {
        const startIndex = indexes[i];
        let flag = true;
        for (let j = 0; j < sources[i].length; j++) {
            if (S[startIndex + j] !== sources[i][j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            replaceIndexs.push(startIndex);
            indexTargetMap[startIndex] = targets[i];
            indexSourceLengthMap[startIndex] = sources[i].length;
        }
    }
    replaceIndexs.sort((a, b) => a - b);
    const result = [];
    let index = 0;
    while (index < S.length) {
        if (replaceIndexs.length && index === replaceIndexs[0]) {
            result.push(indexTargetMap[replaceIndexs[0]]);
            index += indexSourceLengthMap[replaceIndexs[0]];
            replaceIndexs.shift();
        } else {
            result.push(S[index]);
            index++;
        }
    }

    return result.join('');
};
