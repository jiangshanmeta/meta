function maxScoreIndices (nums: number[]): number[] {
    const totalOne = nums.reduce((sum, item) => sum + item, 0);
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
        leftZero += 1 - nums[i];
    }
    return result;
}
