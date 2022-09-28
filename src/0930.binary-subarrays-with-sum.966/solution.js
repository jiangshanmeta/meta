/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
    if (S === 0) {
        const zeroCounts = [];
        let count = 0;
        // S为0的情况，数每组有几个0
        for (let i = 0; i < A.length; i++) {
            if (A[i] === 0) {
                count++;
            } else {
                count > 0 && zeroCounts.push(count);
                count = 0;
            }
        }
        // 不要忘了最后一组(结尾为0)
        count > 0 && zeroCounts.push(count);
        let sum = 0;
        for (let i = 0; i < zeroCounts.length; i++) {
            sum += (1 + zeroCounts[i]) * zeroCounts[i] / 2;
        }
        return sum;
    } else {
        const oneIndexs = [];
        // 记录1的坐标
        for (let i = 0; i < A.length; i++) {
            A[i] === 1 && oneIndexs.push(i);
        }
        if (oneIndexs.length < S) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < oneIndexs.length - S + 1; i++) {
            const leftZeroCount = i === 0 ? oneIndexs[0] : oneIndexs[i] - oneIndexs[i - 1] - 1;
            const rightIndex = i + S - 1;
            const rightZeroCount = rightIndex === oneIndexs.length - 1 ? A.length - oneIndexs[rightIndex] - 1 : oneIndexs[rightIndex + 1] - oneIndexs[rightIndex] - 1;
            sum += (leftZeroCount + 1) * (rightZeroCount + 1);
        }
        return sum;
    }
};
