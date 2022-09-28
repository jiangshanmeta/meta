function pivotArray (nums: number[], pivot: number): number[] {
    const smaller:number[] = [];
    const equal:number[] = [];
    const larger:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            smaller.push(nums[i]);
        } else if (nums[i] === pivot) {
            equal.push(nums[i]);
        } else {
            larger.push(nums[i]);
        }
    }
    return [...smaller, ...equal, ...larger, ];
}
