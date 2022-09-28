function frequencySort (nums: number[]): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return [
        ...map.entries(),
    ].sort(([aNum, aCount, ], [bNum, bCount, ]) => {
        if (aCount !== bCount) {
            return aCount - bCount;
        } else {
            return bNum - aNum;
        }
    }).reduce((arr, [num, count, ]) => {
        for (let i = 0; i < count; i++) {
            arr.push(num);
        }
        return arr;
    }, [] as number[]);
}
