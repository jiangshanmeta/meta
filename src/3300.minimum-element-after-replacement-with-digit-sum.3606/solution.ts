function minElement (nums: number[]): number {
    return Math.min(...nums.map(n => {
        let sum = 0;
        while (n > 0) {
            const digit = n % 10;
            sum += digit;
            n = (n - digit) / 10;
        }
        return sum;
    }));
}
