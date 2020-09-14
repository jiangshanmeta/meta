/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    const sequence = [];
    function backTracking (list, index, lastSum, sequence, candidates) {
        if (lastSum === target) {
            return sequence.push(list.slice());
        }

        if (lastSum > target || index === candidates.length) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            const curItem = candidates[i];
            if (i + 1 < candidates.length && candidates[i + 1] === curItem) {
                let j = i;
                while (j + 1 < candidates.length && candidates[j + 1] === curItem) {
                    j++;
                }
                const counter = j - i + 1;

                for (let k = 0; k < counter; k++) {
                    list.push(curItem);
                    backTracking(list, j + 1, lastSum + (k + 1) * curItem, sequence, candidates);
                }

                for (let k = 0; k < counter; k++) {
                    list.pop();
                }

                i = j;
            } else {
                list.push(curItem);
                backTracking(list, i + 1, lastSum + curItem, sequence, candidates);
                list.pop();
            }
        }
    }

    backTracking([], 0, 0, sequence, candidates);
    return sequence;
};
