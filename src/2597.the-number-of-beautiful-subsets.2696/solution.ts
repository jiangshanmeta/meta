function beautifulSubsets (nums: number[], k: number): number {
    let result = 0;

    const backTracking = (index:number, seq:number[]) => {
        if (index === nums.length) {
            result++;
            return;
        }
        const found = seq.find((item) => Math.abs(item - nums[index]) === k);
        if (found) {
            backTracking(index + 1, seq);
        } else {
            backTracking(index + 1, seq);

            seq.push(nums[index]);
            backTracking(index + 1, seq);
            seq.pop();
        }
    };
    backTracking(0, []);

    return result - 1;
}
