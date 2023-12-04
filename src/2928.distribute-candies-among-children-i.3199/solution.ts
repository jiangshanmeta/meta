function distributeCandies (n: number, limit: number): number {
    if (Math.ceil(n / 3) > limit) {
        return 0;
    }
    let result = 0;
    for (let a = 0; a <= Math.min(limit, n); a++) {
        const rest = n - a;
        const minB = rest > limit ? rest - limit : 0;
        const maxB = Math.min(limit, rest);

        if (maxB >= minB) {
            result += maxB - minB + 1;
        }
    }
    return result;
}
