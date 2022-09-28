function subsetXORSum (nums: number[]): number {
    let result = 0;
    const backTracking = (index:number, val:number) => {
        if (index === nums.length) {
            result += val;
            return;
        }
        backTracking(index + 1, val);
        backTracking(index + 1, val ^ nums[index]);
    };
    backTracking(0, 0);

    return result;
}
