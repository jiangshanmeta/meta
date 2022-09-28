function summaryRanges (nums: number[]): string[] {
    const result:string[] = [];
    let start = 0;
    let end = 0;
    while (end < nums.length) {
        end++;
        while (end < nums.length && nums[end] === nums[end - 1] + 1) {
            end++;
        }
        if (end - start === 1) {
            result.push(String(nums[start]));
        } else {
            result.push(`${nums[start]}->${nums[end - 1]}`);
        }
        start = end;
    }
    return result;
}
