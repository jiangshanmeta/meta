function subsets (nums: number[]): number[][] {
    const result:number[][] = [];
    const backTracking = (index:number, seq:number[]) => {
        if (index === nums.length) {
            result.push([...seq, ]);
            return;
        }
        backTracking(index + 1, seq);

        seq.push(nums[index]);
        backTracking(index + 1, seq);
        seq.pop();
    };
    backTracking(0, []);
    return result;
}
