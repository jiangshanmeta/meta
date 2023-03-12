function minDeletion (nums: number[]): number {
    let offset = 0;
    let index = 0;
    while (index < nums.length) {
        if ((index - offset) % 2 !== 0) {
            index++;
            continue;
        }

        const target = nums[index++];

        while (index < nums.length && nums[index] === target) {
            index++;
            offset++;
        }
    }

    if ((nums.length - offset) % 2 === 1) {
        offset++;
    }

    return offset;
}
