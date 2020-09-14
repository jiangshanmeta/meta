/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
    let result = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    let count = 0;
    const indexMap = {};
    while (leftIndex < A.length) {
        if (count < K) {
            while (rightIndex < A.length && count < K) {
                if (indexMap[A[rightIndex]] === undefined) {
                    count++;
                }
                indexMap[A[rightIndex]] = rightIndex;
                rightIndex++;
            }
            if (count < K) {
                break;
            }
            const start1 = rightIndex;
            while (rightIndex < A.length) {
                if (indexMap[A[rightIndex]] === undefined) {
                    break;
                } else {
                    indexMap[A[rightIndex]] = rightIndex;
                }
                rightIndex++;
            }
            // console.log(leftIndex,rightIndex,start1,'A')
            result += (rightIndex - start1 + 1);
        } else {
            const map = {};
            let count2 = 0;
            let index = leftIndex;
            while (count2 < K) {
                if (map[A[index]] === undefined) {
                    map[A[index]] = true;
                    count2++;
                }
                index++;
            }
            console.log(leftIndex, rightIndex, index, 'B');
            result += rightIndex - index + 1;
        }
        if (indexMap[A[leftIndex]] === leftIndex) {
            indexMap[A[leftIndex]] = undefined;
            count--;
        }
        leftIndex++;
    }

    return result;
};
