/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
    const seqScores = [nums[0], ];
    const seqIndexs = [0, ];
    for (let i = 1; i < nums.length; i++) {
        const diff = i - seqIndexs[0];
        if (diff > k) {
            seqScores.shift();
            seqIndexs.shift();
        }
        const curScore = seqScores[0] + nums[i];
        while (seqScores.length && curScore >= seqScores[seqScores.length - 1]) {
            seqScores.pop();
            seqIndexs.pop();
        }
        seqScores.push(curScore);
        seqIndexs.push(i);
    }
    return seqScores[seqScores.length - 1];
};
