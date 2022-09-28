function judgeSquareSum (c: number): boolean {
    let low = 0;
    let high = Math.floor(Math.sqrt(c));
    while (low <= high) {
        const sum = low * low + high * high;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            low++;
        } else {
            high--;
        }
    }
    return false;
}
