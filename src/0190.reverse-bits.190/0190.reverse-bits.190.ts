function reverseBits (n: number): number {
    n >>>= 0;
    const sign = n & 1;
    n >>>= 1;
    let result = 0;
    for (let i = 0; i < 31; i++) {
        result = (result << 1) + (n & 1);
        n >>>= 1;
    }
    return (result | ((sign << 31) >>> 0)) >>> 0;
}
