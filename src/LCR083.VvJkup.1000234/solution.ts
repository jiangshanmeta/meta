function permute (nums: number[]): number[][] {
    const result:number[][] = [];
    const used = new Array<boolean>(nums.length).fill(false);
    const backTracking = (seq:number[]) => {
        if (seq.length === nums.length) {
            result.push([...seq, ]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
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
