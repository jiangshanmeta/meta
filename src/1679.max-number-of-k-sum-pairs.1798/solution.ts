function maxOperations (nums: number[], k: number): number {
    const set:number[] = [];
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], (map.get(nums[i])!) + 1);
        } else {
            set.push(nums[i]);
            map.set(nums[i], 1);
        }
    }

    let result = 0;
    for (let i = 0; i < set.length; i++) {
        const rest = k - set[i];
        if (rest < set[i]) {
            continue;
        }
        if (rest === set[i]) {
            const count = map.get(rest)!;
            result += (count >> 1);
        } else if (map.has(rest)) {
            result += Math.min(map.get(set[i])!, map.get(rest)!);
        }
    }
    return result;
}
