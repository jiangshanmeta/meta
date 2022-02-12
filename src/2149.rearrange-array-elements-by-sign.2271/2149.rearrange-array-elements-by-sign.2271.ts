function rearrangeArray (nums: number[]): number[] {
    const result:number[] = [];
    let index1 = 0;
    let index2 = 0;
    while (result.length !== nums.length) {
        while (index1 < nums.length && nums[index1] < 0) {
            index1++;
        }
        result.push(nums[index1++]);
        while (index2 < nums.length && nums[index2] > 0) {
            index2++;
        }
        result.push(nums[index2++]);
    }
    return result;
}
