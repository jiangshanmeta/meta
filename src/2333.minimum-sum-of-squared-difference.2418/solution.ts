function minSumSquareDiff (nums1: number[], nums2: number[], k1: number, k2: number): number {
    let k = k1 + k2;
    const diffs = nums1.map((num1, index) => Math.abs(num1 - nums2[index])).sort((a, b) => b - a);
    const couns:number[] = [1, ];
    const vals:number[] = [diffs[0], ];

    for (let i = 1; i < diffs.length; i++) {
        if (diffs[i] === diffs[i - 1]) {
            couns[couns.length - 1] += 1;
        } else {
            vals.push(diffs[i]);
            couns.push(1);
        }
    }
    vals.push(0);
    couns.push(0);

    let index = 0;
    while (k > 0 && index < couns.length - 1) {
        const need = (vals[index] - vals[index + 1]) * couns[index];

        if (need < k) {
            couns[index + 1] += couns[index];
            couns[index] = 0;
        } else {
            const mod = k % couns[index];
            const minDec = (k - mod) / couns[index];
            couns.push(mod);
            vals.push(vals[index] - minDec - 1);

            vals[index] -= minDec;
            couns[index] -= mod;
        }

        k -= need;
        index++;
    }

    let result = 0;
    for (let i = 0; i < couns.length; i++) {
        result += couns[i] * vals[i] * vals[i];
    }

    return result;
}
