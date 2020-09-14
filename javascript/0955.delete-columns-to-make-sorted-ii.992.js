/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    if (A.length < 2) {
        return 0;
    }
    const wordLen = A[0].length;
    let count = 0;
    // skip[i]表示明确A[i]<A[i+1]
    const skip = new Array(A.length - 1).fill(false);
    let skipCount = 0;
    // 一列一列看
    for (let i = 0; i < wordLen; i++) {
        const maybeSkipIndex = [];
        let deleteFlag = false;

        for (let j = 0; j < A.length - 1; j++) {
            // 已知大小关系，后面位不应该比较
            if (skip[j]) {
                continue;
            }
            // 比较两个相邻的word的同一位
            const curValue = A[j];
            const nextValue = A[j + 1];
            // 前者大于后者，该列应该删除
            if (curValue[i] > nextValue[i]) {
                deleteFlag = true;
                break;
            }
            // 前者小于后者，明确大小关系
            if (curValue[i] < nextValue[i]) {
                maybeSkipIndex.push(j);
            }
        }

        if (deleteFlag) {
            count++;
        } else {
            skipCount += maybeSkipIndex.length;
            if (skipCount === A.length - 1) {
                break;
            }
            for (let j = 0; j < maybeSkipIndex.length; j++) {
                skip[maybeSkipIndex[j]] = true;
            }
        }
    }
    return count;
};
