function minimumAverage (nums: number[]): number {
    nums.sort((a, b) => a - b);
    const averages:number[] = [];
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        averages.push((nums[left++] + nums[right--]) / 2);
    }
    return Math.min(...averages);
}
