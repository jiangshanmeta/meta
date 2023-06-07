function semiOrderedPermutation (nums: number[]): number {
    const index1 = nums.indexOf(1);
    let result = index1;

    let index2 = nums.indexOf(nums.length);
    if (index2 < index1) {
        index2++;
    }
    result += nums.length - 1 - index2;
    return result;
}
