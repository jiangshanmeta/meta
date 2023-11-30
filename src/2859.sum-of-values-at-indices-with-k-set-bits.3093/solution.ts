function count1 (n:number) {
    let r = 0;
    while (n) {
        n &= (n - 1);
        r++;
    }
    return r;
}

function sumIndicesWithKSetBits (nums: number[], k: number): number {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count1(i) === k) {
            res += nums[i];
        }
    }

    return res;
}
