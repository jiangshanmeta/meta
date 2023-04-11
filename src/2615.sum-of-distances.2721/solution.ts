function distance (nums: number[]): number[] {
    const m = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
           m.get(nums[i])!.push(i);
        } else {
            m.set(nums[i], [i, ]);
        }
    }
    const prefixMap = new Map<number, number[]>();
    for (const [key, vals, ] of m) {
        const prefix = new Array<number>(vals.length + 1);
        prefix[0] = 0;
        for (let i = 0; i < vals.length; i++) {
            prefix[i + 1] = prefix[i] + vals[i];
        }
        prefixMap.set(key, prefix);
    }

    return nums.map((num, i) => {
        const prefix = prefixMap.get(num)!;
        const index = m.get(nums[i])!.indexOf(i);

        return i * index - prefix[index] + prefix[prefix.length - 1] - prefix[index + 1] - i * (prefix.length - index - 2);
    });
}
