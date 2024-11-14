function permuteUnique (nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const used = new Array<boolean>(nums.length).fill(false);
    const result:number[][] = [];
    const backTracking = (seq:number[]) => {
        if (seq.length === nums.length) {
            result.push([...seq, ]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
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
