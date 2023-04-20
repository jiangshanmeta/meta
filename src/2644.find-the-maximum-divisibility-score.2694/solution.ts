function maxDivScore (nums: number[], divisors: number[]): number {
    let result = 0;
    let count = -1;
    for (const divisor of divisors) {
        let c = 0;
        for (const num of nums) {
            if (num % divisor === 0) {
                c++;
            }
        }
        if (c > count) {
            count = c;
            result = divisor;
        } else if (c === count && divisor < result) {
            result = divisor;
        }
    }

    return result;
}
