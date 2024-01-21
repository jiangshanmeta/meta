function bestCoordinate (towers: number[][], radius: number): number[] {
    let rx = 0;
    let ry = 0;
    let rq = 0;
    const r2 = radius ** 2;
    const map = new Map<string, number>();
    for (const [x, y, q, ] of towers) {
        if (q === 0) {
            continue;
        }
        for (let i = x - radius; i <= x + radius; i++) {
            for (let j = y - radius; j <= y + radius; j++) {
                const d2 = (i - x) ** 2 + (j - y) ** 2;
                if (d2 > r2) {
                    continue;
                }
                const v = Math.floor(q / (1 + Math.sqrt(d2)));
                const p = `${i},${j}`;
                const v2 = (map.has(p) ? map.get(p)! : 0) + v;
                map.set(p, v2);
                if (v2 > rq) {
                    rq = v2;
                    rx = i;
                    ry = j;
                } else if (v2 === rq && (i < rx || (i === rx && (j < ry)))) {
                    rx = i;
                    ry = j;
                }
            }
        }
    }
    return [rx, ry, ];
}
