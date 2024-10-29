function losingPlayer (x: number, y: number): string {
    const round = Math.min(x, y >> 2) % 2;
    return round === 1 ? 'Alice' : 'Bob';
}
