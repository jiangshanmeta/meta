function clumsy (N: number): number {
    let result = 0;
    let sign = 1;
    let index = N;
    while (index > 3) {
        let num = index--;
        num *= (index--);
        num = Math.floor(num / (index--));
        result += sign * num;
        result += (index--);
        sign = -1;
    }
    if (index > 0) {
        let num = index--;
        if (index > 0) {
            num *= (index--);
        }
        if (index > 0) {
            num = Math.floor(num / (index--));
        }
        result += sign * num;
    }

    return result;
}
