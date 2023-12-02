function findKOr (nums: number[], k: number): number {
    const counts = new Array<number>(32).fill(0);
    for (const num of nums) {
        const str = num.toString(2);
        for (let i = str.length - 1; i > -1; i--) {
            if (str[i] === '1') {
                counts[32 - (str.length - i)]++;
            }
        }
    }
    let result = 0;
    let base = 1;
    for (let i = 31; i > -1; i--) {
        if (counts[i] >= k) {
            result += base;
        }
        base *= 2;
    }
    return result;
}
