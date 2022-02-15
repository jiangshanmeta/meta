function countOperations (num1: number, num2: number): number {
    let count = 0;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 < num2) {
            num2 -= num1;
        } else {
            num1 -= num2;
        }
        count++;
    }
    return count;
}
