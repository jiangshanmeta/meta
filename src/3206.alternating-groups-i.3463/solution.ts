function numberOfAlternatingGroups (colors: number[]): number {
    let result = 0;
    const L = colors.length;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== colors[(i + 1) % L] && colors[(i + 1) % L] !== colors[(i + 2) % L]) {
            result++;
        }
    }
    return result;
}
