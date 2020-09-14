/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    const valueIndexMap = {};
    const N = A.length;
    for (let i = 0; i < N; i++) {
        (valueIndexMap[A[i]] || (valueIndexMap[A[i]] = [])).push(i);
    }
    // map[`${j},${k}`]以j k元素为最后两个元素的等差数列的个数
    const map = {};
    let result = 0;
    for (let k = 2; k < N; k++) {
        for (let j = 1; j < k; j++) {
            const d = A[k] - A[j];
            const nodeIs = valueIndexMap[A[j] - d];
            if (nodeIs) {
                let count = 0;
                // A[nodeIs[m]] A[j] A[k] 构成等差数列
                for (let m = 0; m < nodeIs.length; m++) {
                    if (nodeIs[m] >= j) {
                        break;
                    }
                    count += ((map[`${nodeIs[m]},${j}`] || 0) + 1);
                }
                result += count;
                map[`${j},${k}`] = count;
            }
        }
    }
    return result;
};
