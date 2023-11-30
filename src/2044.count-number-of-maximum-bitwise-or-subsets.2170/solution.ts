function countMaxOrSubsets (nums: number[]): number {
    const MAX_OR = nums.reduce((acc, item) => acc | item, 0);
    const N = nums.length;
    if (MAX_OR === 0) {
        return N * (N + 1) / 2;
    }
    let result = 0;
    const backTracking = (index:number, current:number) => {
        if (index === N) {
            if (current === MAX_OR) {
                result++;
            }
            return;
        }
        backTracking(index + 1, current);
        backTracking(index + 1, current | nums[index]);
    };
    backTracking(0, 0);

    return result;
}
