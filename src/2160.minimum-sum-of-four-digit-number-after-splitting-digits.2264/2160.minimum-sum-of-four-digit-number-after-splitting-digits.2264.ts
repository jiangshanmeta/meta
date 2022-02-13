function minimumSum (num: number): number {
    const list = String(num).split('').sort().map(item => +item);
    return list[0] * 10 + list[3] + list[1] * 10 + list[2];
}
