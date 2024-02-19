function countMatchingSubarrays(nums: number[], pattern: number[]): number {
    let result = 0;
    let count = 0;
    const next = getNext(pattern);
    const isMatch = (i: number, j: number) => {
        if (pattern[j] === 1) {
            return nums[i] > nums[i - 1];
        } else if (pattern[j] === 0) {
            return nums[i] === nums[i - 1]
        } else {
            return nums[i] < nums[i - 1];
        }

    }

    for (let i = 0; i < nums.length; i++) {
        while (count > 0 && !isMatch(i, count)) {
            count = next[count - 1];
        }
        if (isMatch(i, count)) {
            count++;
        }
        if (count === pattern.length) {
            result++;
            count = next[count - 1]
        }
    }

    return result
};

function getNext(pattern: number[]) {
    const next = new Array<number>(pattern.length)
    next[0] = 0;
    let count = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (count > 0 && pattern[count] !== pattern[i]) {
            count = next[count - 1]
        }
        if (pattern[i] === pattern[count]) {
            count++
        }
        next[i] = count;
    }

    return next
}