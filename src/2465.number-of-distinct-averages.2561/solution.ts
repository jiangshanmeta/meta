function distinctAverages (nums: number[]): number {
    const set = new Set();
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const avg = (nums[left++] + nums[right--]) / 2;
        set.add(avg);
    }
    return set.size;
}
