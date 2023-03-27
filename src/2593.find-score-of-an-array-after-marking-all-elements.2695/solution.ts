function findScore (nums: number[]): number {
    const m = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            m.get(nums[i])!.push(i);
        } else {
            m.set(nums[i], [i, ]);
        }
    }
    const unique = [...m.keys(), ].sort((a, b) => a - b);

    const marked = new Array<boolean>(nums.length).fill(false);
    let result = 0;
    for (const num of unique) {
        const indexs = m.get(num)!;
        for (const index of indexs) {
            if (marked[index]) {
                continue;
            }
            result += num;
            marked[index] = true;
            if (index > 0) {
                marked[index - 1] = true;
            }
            if (index + 1 < nums.length) {
                marked[index + 1] = true;
            }
        }
    }

    return result;
}
