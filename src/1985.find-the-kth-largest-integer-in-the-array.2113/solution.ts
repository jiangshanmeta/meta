function kthLargestNumber (nums: string[], k: number): string {
    nums.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return a[i] < b[i] ? -1 : 1;
        }
        return 0;
    });
    return nums[nums.length - k];
}
