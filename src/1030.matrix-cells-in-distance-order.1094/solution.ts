function allCellsDistOrder (rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    const points:number[][] = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            points.push([i, j, ]);
        }
    }
    points.sort((a, b) => Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) - Math.abs(b[0] - rCenter) - Math.abs(b[1] - cCenter));
    return points;
}
