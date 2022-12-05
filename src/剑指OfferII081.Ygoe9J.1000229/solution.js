/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    const backTracking = (index, seq, rest) => {
        if (rest === 0) {
            result.push([...seq, ]);
            return;
        }
        if (rest < 0 || index === candidates.length) {
            return;
        }
        backTracking(index + 1, seq, rest);

        seq.push(candidates[index]);
        backTracking(index, seq, rest - candidates[index]);
        seq.pop();
    };
    backTracking(0, [], target);
    return result;
};
