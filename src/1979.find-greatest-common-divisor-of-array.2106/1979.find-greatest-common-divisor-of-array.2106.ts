function findGCD (nums: number[]): number {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max);
        min = Math.min(nums[i], min);
    }
    return gcd(max, min);
}

function gcd (a:number, b:number) {
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
