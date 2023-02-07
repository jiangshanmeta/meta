function alternateDigitSum (n: number): number {
    let result = 0;
    const str = n.toString();
    let sign = 1;
    for (let i = 0; i < str.length; i++) {
        result += sign * (+str[i]);
        sign = -sign;
    }
    return result;
}
