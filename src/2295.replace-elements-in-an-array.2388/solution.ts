function arrayChange (nums: number[], operations: number[][]): number[] {
    const valueIndexsMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        valueIndexsMap.set(nums[i], i);
    }
    for (const [from, to, ] of operations) {
        const indexs = valueIndexsMap.get(from);
        valueIndexsMap.delete(from);
        valueIndexsMap.set(to, indexs);
    }
    for (const [target, index, ] of valueIndexsMap) {
        nums[index] = target;
    }

    return nums;
}
