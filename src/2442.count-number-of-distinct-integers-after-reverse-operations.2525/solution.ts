function countDistinctIntegers (nums: number[]): number {
    const reversedNums = nums.map(reverse);

    return new Set([...nums, ...reversedNums, ]).size;
}

function reverse (num:number) {
    let result = 0;
    while (num > 0) {
        const digit = num % 10;
        result = result * 10 + digit;
        num = (num - digit) / 10;
    }
    return result;
}
