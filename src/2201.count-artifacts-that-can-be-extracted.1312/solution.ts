function digArtifacts (n: number, artifacts: number[][], dig: number[][]): number {
    const digSet = new Set(dig.map(([a, b, ]) => `${a},${b}`));
    return artifacts.reduce((acc, [r1, c1, r2, c2, ]) => {
        for (let i = r1; i <= r2; i++) {
            for (let j = c1; j <= c2; j++) {
                if (!digSet.has(`${i},${j}`)) {
                    return acc;
                }
            }
        }
        return acc + 1;
    }, 0);
}
