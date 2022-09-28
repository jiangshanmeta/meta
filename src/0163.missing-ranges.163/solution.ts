function findMissingRanges (nums: number[], lower: number, upper: number): string[] {
    const result:string[] = [];
    if (nums.length) {
        helper(result, lower - 1, nums[0]);
        for (let i = 1; i < nums.length; i++) {
            helper(result, nums[i - 1], nums[i]);
        }
        helper(result, nums[nums.length - 1], upper + 1);
    } else {
        helper(result, lower - 1, upper + 1);
    }
    return result;
}

function helper (result:string[], num1:number, num2:number) {
    if (num1 < num2 - 1) {
        const left = num1 + 1;
        const right = num2 - 1;
        if (left === right) {
            result.push(String(left));
        } else {
            result.push(`${left}->${right}`);
        }
    }
}
