function countPoints (rings: string): number {
    const rgb = {
        R: new Array<boolean>(10).fill(false),
        G: new Array<boolean>(10).fill(false),
        B: new Array<boolean>(10).fill(false),
    };
    for (let i = 0; i < rings.length; i += 2) {
        rgb[rings[i] as keyof typeof rgb][+rings[i + 1]] = true;
    }
    let result = 0;
    for (let i = 0; i < 10; i++) {
        if (rgb.R[i] && rgb.G[i] && rgb.B[i]) {
            result++;
        }
    }
    return result;
}
