function runeReserve (runes: number[]): number {
    runes.sort((a, b) => a - b);
    let result = 1;
    let index = 1;
    let count = 1;
    while (index < runes.length) {
        if (runes[index] - runes[index - 1] > 1) {
            count = 1;
        } else {
            count++;
            result = Math.max(result, count);
        }
        index++;
    }
    return result;
}
