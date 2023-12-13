function relocateMarbles (nums: number[], moveFrom: number[], moveTo: number[]): number[] {
    const set = new Set(nums);
    for (let i = 0; i < moveFrom.length; i++) {
        if (moveFrom[i] === moveTo[i]) {
            continue;
        }
        set.add(moveTo[i]);
        set.delete(moveFrom[i]);
    }
    return [...set, ].sort((a, b) => a - b);
}
