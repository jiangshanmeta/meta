function subsetsWithDup (nums: number[]): number[][] {
    const result:number[][] = [];
    nums.sort((a, b) => a - b);
    backTracking(
        nums,
        new Array(nums.length).fill(false),
        0,
        [] as number[],
        result
    );
    return result;
}

function backTracking (nums:number[], used:boolean[], index:number, sequence:number[], result:number[][]):void {
    if (index === nums.length) {
        result.push(sequence.slice());
        return;
    }
    backTracking(nums, used, index + 1, sequence, result);
    if (index > 0 && nums[index] === nums[index - 1] && !used[index - 1]) {
        return;
    }
    sequence.push(nums[index]);
    used[index] = true;
    backTracking(nums, used, index + 1, sequence, result);
    used[index] = false;
    sequence.pop();
}
