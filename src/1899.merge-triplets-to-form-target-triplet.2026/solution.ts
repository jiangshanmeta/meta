function mergeTriplets (triplets: number[][], target: number[]): boolean {
    let x = 0;
    let y = 0;
    let z = 0;
    for (const [a, b, c, ] of triplets) {
        if (a > target[0] || b > target[1] || c > target[2]) {
            continue;
        }
        x = Math.max(x, a);
        y = Math.max(y, b);
        z = Math.max(z, c);
    }
    return x === target[0] && y === target[1] && z === target[2];
}
