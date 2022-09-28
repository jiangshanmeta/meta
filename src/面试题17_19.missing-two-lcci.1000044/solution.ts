function missingTwo (nums: number[]): number[] {
    nums.push(0, 0, 0);

    let index = 0;
    while (index < nums.length) {
        if (nums[index] === index) {
            index++;
            continue;
        }
        const num = nums[index];
        if (nums[num] === num) {
            index++;
            continue;
        }
        nums[index] = nums[num];
        nums[num] = num;
    }
    index = 1;
    const result:number[] = [];

    while (index < nums.length && result.length < 2) {
        if (nums[index] !== index) {
            result.push(index);
        }
        index++;
    }
    return result;
}
