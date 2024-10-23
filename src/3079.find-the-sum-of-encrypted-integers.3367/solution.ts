function sumOfEncryptedInt (nums: number[]): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += calc(nums[i]);
    }
    return sum;
}
const calc = (num:number) => {
    let max = 0;
    let base = 0;
    while (num > 0) {
        const digi = num % 10;
        max = Math.max(max, digi);
        base = base * 10 + 1;
        num = (num - digi) / 10;
    }
    return base * max;
};
