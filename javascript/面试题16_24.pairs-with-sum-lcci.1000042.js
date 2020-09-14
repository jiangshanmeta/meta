/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
    const numCountMap = {};
    const numSeq = [];
    for (let i = 0; i < nums.length; i++) {
        if (!numCountMap[nums[i]]) {
            numCountMap[nums[i]] = 1;
            numSeq.push(nums[i]);
        } else {
            numCountMap[nums[i]]++;
        }
    }
    numSeq.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < numSeq.length; i++) {
        const rest = target - numSeq[i];
        if (rest < numSeq[i]) {
            break;
        }
        if (!numCountMap[rest]) {
            continue;
        }
        if (rest !== numSeq[i]) {
            const count = Math.min(numCountMap[numSeq[i]], numCountMap[rest]);
            for (let j = 0; j < count; j++) {
                result.push([
                    numSeq[i], rest, ]);
            }
        } else {
            const count = numCountMap[numSeq[i]] >>> 1;
            for (let j = 0; j < count; j++) {
                result.push([
                    rest, rest, ]);
            }
        }
    }

    return result;
};
