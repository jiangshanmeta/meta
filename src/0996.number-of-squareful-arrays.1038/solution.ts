function numSquarefulPerms (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let result = 0;
    const used = new Array<boolean>(nums.length);
    const backTracking = (seq:number[]) => {
        if (seq.length === nums.length) {
            result++;
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }

            if (seq.length > 0 && !Number.isInteger(Math.sqrt(nums[i] + seq[seq.length - 1]))) {
                continue;
            }

            used[i] = true;
            seq.push(nums[i]);
            backTracking(seq);
            seq.pop();
            used[i] = false;
        }
    };
    backTracking([]);
    return result;
}
