function isStraight (nums: number[]): boolean {
    let zeroCount = 0;
    const counts:boolean[] = new Array(14).fill(false);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            counts[nums[i]] = true;
        }
    }

    let hasCount = 0;
    for (let i = 1; i < 5; i++) {
        if (counts[i]) {
            hasCount++;
        }
    }
    for (let i = 5; i < 14; i++) {
        if (counts[i]) {
            hasCount++;
        }

        if (hasCount + zeroCount === 5) {
            return true;
        }

        if (counts[i - 4]) {
            hasCount--;
        }
    }

    return false;
}
