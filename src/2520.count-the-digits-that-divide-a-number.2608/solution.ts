function countDigits (num: number): number {
    let copy = num;
    let result = 0;
    while (copy) {
        const digit = copy % 10;
        if (num % digit === 0) {
            result++;
        }
        copy = (copy - digit) / 10;
    }
    return result;
}
