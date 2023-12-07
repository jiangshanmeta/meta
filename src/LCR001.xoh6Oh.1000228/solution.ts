function divide (a: number, b: number): number {
    const rst = Math.trunc(a / b);
    const max = 2 ** 31;
    if (rst > max - 1 || rst < -max) {
        return max - 1;
    }
    return rst;
}
