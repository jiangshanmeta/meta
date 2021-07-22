function addRungs (rungs: number[], dist: number): number {
    let result = 0;
    for (let i = 0; i < rungs.length; i++) {
        const diff = (i > 0) ? rungs[i] - rungs[i - 1] : rungs[i];
        if (diff <= dist) {
            continue;
        }
        result += Math.ceil((diff - dist) / dist);
    }
    return result;
}
