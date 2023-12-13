function maxScore (nums: number[], x: number): number {
    let result = nums[0];
    let evenIndex = nums[0] % 2 === 0 ? 0 : -1;
    let oddIndex = evenIndex === 0 ? -1 : 0;
    let oddScore = result;
    let evenScore = result;
    for (let i = 1; i < nums.length; i++) {
        const isOdd = nums[i] % 2 === 1;
        if (isOdd) {
            let current = 0;
            if (oddIndex > -1 && evenIndex > -1) {
                current = Math.max(oddScore, evenScore - x) + nums[i];
            } else if (oddIndex > -1) {
                current = Math.max(oddScore, evenScore - x) + nums[i];
            } else {
                current = Math.max(oddScore - x, evenScore - x) + nums[i];
            }
            result = Math.max(result, current);
            oddScore = current;
            oddIndex = i;
        } else {
            let current = 0;
            if (oddIndex > -1 && evenIndex > -1) {
                current = Math.max(oddScore - x, evenScore) + nums[i];
            } else if (evenIndex > -1) {
                current = Math.max(oddScore - x, evenScore) + nums[i];
            } else {
                current = Math.max(oddScore - x, evenScore - x) + nums[i];
            }
            result = Math.max(result, current);
            evenScore = current;
            evenIndex = i;
        }
    }
    return result;
}
