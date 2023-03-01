function maximumBags (capacity: number[], rocks: number[], additionalRocks: number): number {
    const diffs = capacity.map((cap, index) => cap - rocks[index]).sort((a, b) => a - b);
    let index = 0;
    while (index < diffs.length && diffs[index] <= additionalRocks) {
        additionalRocks -= diffs[index++];
    }
    return index;
}
