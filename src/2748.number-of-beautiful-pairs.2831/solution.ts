function countBeautifulPairs (nums: number[]): number {
    const ls = nums.map(num => num % 10);
    const counts = new Array<number>(10).fill(0);
    for (let i = 0; i < nums.length; i++) {
        counts[ls[i]]++;
    }
    const config = [
        [],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, ],
        [1, 3, 5, 7, 9, ],
        [1, 2, 4, 5, 7, 8, ],
        [1, 3, 5, 7, 9, ],
        [1, 2, 3, 4, 6, 7, 8, 9, ],

        [1, 5, 7, ],
        [1, 2, 3, 4, 5, 6, 8, 9, ],
        [1, 3, 5, 7, 9, ],
        [1, 2, 4, 5, 7, 8, ],
    ];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        counts[ls[i]]--;
        const primes = config[+String(nums[i])[0]];
        for (const prime of primes) {
            result += counts[prime];
        }
    }
    return result;
}
