/**
 * @param {number[]} A
 * @return {number[]}
 */
// 有点像556
var prevPermOpt1 = function (A) {
    let i = A.length - 1;
    while (i > 0) {
        if (A[i - 1] === A[i]) {
            i--;
        } else if (A[i - 1] > A[i]) {
            // 到这说明A[i]及后面的都相等 只需交换A[i]和A[i-1]即可
            const tmp = A[i];
            A[i] = A[i - 1];
            A[i - 1] = tmp;
            return A;
        } else {
            while (i > 0) {
                if (A[i - 1] > A[i]) {
                    // 找到<A[i-1]的最接近A[i-1]距离i-1最近的
                    const max = A[i - 1];
                    let j = i + 1;
                    let index = i;
                    let curMax = A[i];
                    while (j < A.length && A[j] < max) {
                        if (A[j] > curMax) {
                            index = j;
                            curMax = A[j];
                        }
                        j++;
                    }

                    const tmp = A[index];
                    A[index] = A[i - 1];
                    A[i - 1] = tmp;
                    return A;
                }
                i--;
            }
            return A;
        }
    }
    return A;
};
