function findPrefixScore (nums: number[]): number[] {
    const conver = new Array<number>(nums.length);
    conver[0] = 2 * nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        conver[i] = nums[i] + max;
    }
    for (let i = 1; i < conver.length; i++) {
        conver[i] += conver[i - 1];
    }
    return conver;
}
