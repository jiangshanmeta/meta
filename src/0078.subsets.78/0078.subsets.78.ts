function subsets (nums: number[]): number[][] {
    const result:number[][] = [];
    backTracking(
        nums,
        0,
        [] as number[],
        result
    );
    return result;
}

function backTracking (nums:number[], index:number, sequence:number[], result:number[][]) {
    if (index === nums.length) {
        result.push(sequence.slice());
        return;
    }
    backTracking(nums, index + 1, sequence, result);
    sequence.push(nums[index++]);
    backTracking(nums, index, sequence, result);
    sequence.pop();
}
