function distributeCandies(candyType: number[]): number {
    const set = new Set(candyType);
    return Math.min(candyType.length/2,set.size);
};