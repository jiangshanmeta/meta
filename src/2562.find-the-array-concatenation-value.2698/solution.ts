function findTheArrayConcVal (nums: number[]): number {
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const str = `${nums[left++]}${nums[right--]}`;
        result += (+str);
    }
    if (left === right) {
        result += nums[left];
    }
    return result;
}
