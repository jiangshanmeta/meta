function sortEvenOdd (nums: number[]): number[] {
    const even = nums.filter((_, index) => index % 2 === 0).sort((a, b) => a - b);
    const odd = nums.filter((_, index) => index & 1).sort((a, b) => b - a);
    even.forEach((num, index) => {
        nums[index * 2] = num;
    });
    odd.forEach((num, index) => {
        nums[index * 2 + 1] = num;
    });
    return nums;
}
