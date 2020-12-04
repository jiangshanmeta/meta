/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const numCountMap = {};
    for (let i = 0; i < nums.length; i++) {
        numCountMap[nums[i]] = (numCountMap[nums[i]] || 0) + 1;
    }
    return Object.entries(numCountMap).sort(([numA, countA, ], [numB, countB, ]) => {
        if (countA !== countB) {
            return countA - countB;
        }
        return numB - numA;
    }).reduce((result, [num, count, ]) => {
        num = +num;
        for (let i = 0; i < count; i++) {
            result.push(num);
        }
        return result;
    }, []);
};
