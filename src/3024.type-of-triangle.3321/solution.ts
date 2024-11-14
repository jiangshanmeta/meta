function triangleType(nums: number[]): string {
    nums.sort((a, b) => a - b);
    if (nums[0] + nums[1] <= nums[2]) {
        return "none"
    }
    const a = nums[0] === nums[1];
    const b = nums[0] === nums[2];
    const c = nums[1] === nums[2];
    if (a && b && c) {
        return "equilateral"
    }
    if (!a && !b && !c) {
        return "scalene"
    }
    return "isosceles"
};