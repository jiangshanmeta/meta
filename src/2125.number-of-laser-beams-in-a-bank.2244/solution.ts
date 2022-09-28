function numberOfBeams (bank: string[]): number {
    let result = 0;
    let last = 0;
    for (const row of bank) {
        let count = 0;
        for (const c of row) {
            if (c === '1') {
                count++;
            }
        }
        if (count) {
            result += last * count;
            last = count;
        }
    }
    return result;
}
