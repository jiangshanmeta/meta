function pairSums (nums: number[], target: number): number[][] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    const keys = [...map.keys(), ].sort((a, b) => a - b);
    const result:number[][] = [];
    for (let i = 0; i < keys.length; i++) {
        const rest = target - keys[i];
        if (rest < keys[i]) {
            break;
        }
        if (!map.has(rest)) {
            continue;
        }
        if (rest === keys[i]) {
            const count = map.get(rest)! >> 1;
            for (let j = 0; j < count; j++) {
                result.push([rest, rest, ]);
            }
        } else {
            const count = Math.min(map.get(keys[i])!, map.get(rest)!);
            for (let j = 0; j < count; j++) {
                result.push([keys[i], rest, ]);
            }
        }
    }

    return result;
}
