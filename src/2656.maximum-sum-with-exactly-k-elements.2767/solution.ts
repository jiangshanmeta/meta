function maximizeSum (nums: number[], k: number): number {
    const max = Math.max(...nums);
    return max * k + k * (k - 1) / 2;
}
