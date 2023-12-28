function countInterestingSubarrays (nums: number[], modulo: number, k: number): number {
    const indexs:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % modulo === k) {
            indexs.push(i);
        }
    }
    let res = 0;
    let cnt = k;
    if (cnt === 0) {
        if (indexs.length === 0) {
            return nums.length * (nums.length + 1) / 2;
        }

        for (let i = 0; i < indexs.length; i++) {
            const c = i === 0 ? indexs[i] : indexs[i] - indexs[i - 1] - 1;
            res += c * (c + 1) / 2;
        }

        const last = nums.length - indexs[indexs.length - 1] - 1;
        res += last * (last + 1) / 2;
        cnt += modulo;
    }
    const befores = new Array<number>(indexs.length);
    befores[0] = indexs[0] + 1;
    for (let i = 1; i < befores.length; i++) {
        befores[i] = indexs[i] - indexs[i - 1];
    }
    const prefixs = new Array<number>(indexs.length);
    for (let i = 0; i < Math.min(modulo, prefixs.length); i++) {
        prefixs[i] = befores[i];
    }
    for (let i = modulo; i < prefixs.length; i++) {
        prefixs[i] = befores[i] + prefixs[i - modulo];
    }

    for (let i = cnt - 1; i < indexs.length; i++) {
        const next = i === indexs.length - 1 ? nums.length - indexs[i] : indexs[i + 1] - indexs[i];
        const before = prefixs[i - cnt + 1];

        res += before * next;
    }

    return res;
}
