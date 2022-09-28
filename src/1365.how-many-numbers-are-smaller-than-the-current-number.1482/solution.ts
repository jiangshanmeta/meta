function smallerNumbersThanCurrent (nums: number[]): number[] {
    const numIndexsMap = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (numIndexsMap.has(nums[i])) {
            numIndexsMap.get(nums[i])!.push(i);
        } else {
            numIndexsMap.set(nums[i], [i, ]);
        }
    }
    nums.sort((a, b) => a - b);
    const result:number[] = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        const indexs = numIndexsMap.get(nums[i])!;
        for (let j = 0; j < indexs.length; j++) {
            result[indexs[j]] = i;
        }
    }

    return result;
}
