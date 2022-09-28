function removeElement (nums: number[], val: number): number {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            continue;
        }
        nums[index++] = nums[i];
    }
    return index;
}
