function jump (nums: number[]): number {
    let left = 0;
    let right = 0;
    let count = 0;
    while (right < nums.length - 1) {
        count++;
        let newRight = right;
        for (let i = left; i <= right; i++) {
            newRight = Math.max(newRight, i + nums[i]);
        }
        left = right + 1;
        right = newRight;
    }
    return count;
}
