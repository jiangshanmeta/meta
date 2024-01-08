function eliminateMaximum (dist: number[], speed: number[]): number {
    const time = dist.map((d, i) => Math.ceil(d / speed[i])).sort((a, b) => a - b);
    for (let i = 0; i < time.length; i++) {
        if (time[i] <= i) {
            return i;
        }
    }
    return dist.length;
}
