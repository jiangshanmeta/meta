function minCostToMoveChips (position: number[]): number {
    let odd = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] & 1) {
            odd++;
        }
    }
    return Math.min(odd, position.length - odd);
}
