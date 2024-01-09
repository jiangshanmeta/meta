function areaOfMaxDiagonal (dimensions: number[][]): number {
    let res = 0;
    let max = 0;
    for (const [x, y, ] of dimensions) {
        const d = x ** 2 + y ** 2;
        if (d > max) {
            max = d;
            res = x * y;
        } else if (d === max) {
            res = Math.max(res, x * y);
        }
    }
    return res;
}
