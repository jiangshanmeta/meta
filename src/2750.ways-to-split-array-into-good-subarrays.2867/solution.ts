function numberOfGoodSubarraySplits (nums: number[]): number {
    let index = nums.indexOf(1);
    if (index === -1) {
        return 0;
    }
    const MOD = 10 ** 9 + 7;
    let res = 1;
    index++;
    while (index < nums.length) {
        let c = 1;
        while (index < nums.length && nums[index] === 0) {
            c++;
            index++;
        }
        if (index === nums.length) {
            break;
        }
        res = (res * c) % MOD;
        index++;
    }
    return res;
}
