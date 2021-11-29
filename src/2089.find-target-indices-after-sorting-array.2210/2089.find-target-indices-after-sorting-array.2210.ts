function targetIndices (nums: number[], target: number): number[] {
    let eq = 0;
    let lt = 0;
    for (const item of nums) {
        if (item === target) {
            eq++;
        } else if (item < target) {
            lt++;
        }
    }
    if (eq === 0) {
        return [];
    }
    const result = [];
    for (let i = lt; i < lt + eq; i++) {
        result.push(i);
    }

    return result;
}
