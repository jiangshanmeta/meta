function findIndices (nums: number[], indexDifference: number, valueDifference: number): number[] {
    let max = nums[0];
    let maxIndex = 0;
    let min = nums[0];
    let minIndex = 0;
    for (let i = indexDifference; i < nums.length; i++) {
        if (nums[i - indexDifference] > max) {
            max = nums[i - indexDifference];
            maxIndex = i - indexDifference;
        }
        if (nums[i - indexDifference] < min) {
            min = nums[i - indexDifference];
            minIndex = i - indexDifference;
        }

        if (Math.abs(max - nums[i]) >= valueDifference) {
            return [maxIndex, i, ];
        }
        if (Math.abs(min - nums[i]) >= valueDifference) {
            return [minIndex, i, ];
        }
    }
    return [-1, -1, ];
}
