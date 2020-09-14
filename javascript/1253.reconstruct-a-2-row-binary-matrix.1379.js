/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
    // 如果colsum[i]为2 则两行i位置都为1
    // 如果colsum[i]为0 则两行i位置都为0
    // 如果colsum[i]为1 不好说，所以把i放到singleIndexs中最后处理
    const result = [
        new Array(colsum.length).fill(0),
        new Array(colsum.length).fill(0),
    ];
    const singleIndexs = [];
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] === 2) {
            // 看upper和lower是否能够提供足够多的1
            if (upper === 0 || lower === 0) {
                return [];
            }

            result[0][i] = 1;
            result[1][i] = 1;
            upper--;
            lower--;
        } else if (colsum[i] === 1) {
            singleIndexs.push(i);
        }
    }
    // 现在upper+lower是能提供的1的数量 singleIndexs.length 是需要的数量 要一致
    if (singleIndexs.length !== upper + lower) {
        return [];
    }
    // 因为可以返回任意一个结果，所以就先填充第0行，再填充第一行
    for (let i = 0; i < singleIndexs.length; i++) {
        const index = singleIndexs[i];
        if (upper) {
            result[0][index] = 1;
            upper--;
        } else {
            result[1][index] = 1;
            lower--;
        }
    }

    return result;
};
