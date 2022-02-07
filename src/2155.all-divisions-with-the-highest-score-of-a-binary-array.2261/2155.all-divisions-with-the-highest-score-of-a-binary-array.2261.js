/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function (nums) {
    const totalOne = nums.reduce((total, item) => {
        return total + item;
    }, 0);
    const result = [nums.length, ];
    let maxScore = nums.length - totalOne;
    let leftZero = 0;
    for (let i = 0; i < nums.length; i++) {
        const currentScore = leftZero + totalOne - (i - leftZero);
        if (currentScore > maxScore) {
            result.length = 0;
            result.push(i);
            maxScore = currentScore;
        } else if (currentScore === maxScore) {
            result.push(i);
        }

        if (nums[i] === 0) {
            leftZero++;
        }
    }
    return result;
};
