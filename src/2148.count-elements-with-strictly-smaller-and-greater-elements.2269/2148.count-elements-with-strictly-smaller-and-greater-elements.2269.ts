function countElements (nums: number[]): number {
    let result = 0;
    nums.sort((a, b) => a - b);
    let index = nums.findIndex((item) => item !== nums[0]);
    if (index === -1) {
        return 0;
    }
    while (index < nums.length - 1) {
        const num = nums[index++];
        let count = 1;
        while (index < nums.length && nums[index] === num) {
            index++;
            count++;
        }
        if (index !== nums.length) {
            result += count;
        }
    }
    return result;
}
