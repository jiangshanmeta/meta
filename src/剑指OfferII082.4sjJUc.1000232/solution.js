/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const used = new Array(candidates.length).fill(false);
    const result = [];
    const backTracking = (index, seq, rest) => {
        if (rest === 0) {
            result.push([...seq, ]);
            return;
        }
        if (index === candidates.length || rest < 0) {
            return;
        }
        backTracking(index + 1, seq, rest);

        if (index > 0 && candidates[index] === candidates[index - 1] && !used[index - 1]) {
            return;
        }
        used[index] = true;
        seq.push(candidates[index]);
        backTracking(index + 1, seq, rest - candidates[index]);
        seq.pop();
        used[index] = false;
    };
    backTracking(0, [], target);
    return result;
};
