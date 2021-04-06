function isPerfectSquare (num: number): boolean {
    let low = 1;
    let high = num;
    while (low <= high) {
        const mid = low + ((high - low) >>> 1);
        const square = mid * mid;
        if (square > num) {
            high = mid - 1;
        } else if (square < num) {
            low = mid + 1;
        } else {
            return true;
        }
    }
    return false;
}
