function countNicePairs (nums: number[]): number {
    const map = new Map<number, number>();
    const mod = 10 ** 9 + 7;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const diff = rev(nums[i]) - nums[i];
        if (map.has(diff)) {
            result = (result + map.get(diff)) % mod;
            map.set(diff, map.get(diff) + 1);
        } else {
            map.set(diff, 1);
        }
    }
    return result;
}

function rev (num:number):number {
    let result = 0;
    while (num) {
        const digit = num % 10;
        result = result * 10 + digit;
        num = (num - digit) / 10;
    }
    return result;
}
